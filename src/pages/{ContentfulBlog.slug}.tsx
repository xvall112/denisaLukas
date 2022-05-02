import React, { useEffect, useContext } from "react"
import { graphql } from "gatsby"
import { MenuContext } from "../providers/menu/menu.providers"
//components
import SEO from "../components/own/seo"
import WithLayout from "../../WithLayout"
import Place from "../layouts/Place/Place"
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"
import { Section } from "components/organisms"
import {
  Content,
  Hero,
  SidebarArticles,
  SidebarNewsletter,
  SimilarStories,
} from "../views/BlogArticle/components"
import { similarStories } from "../views/BlogArticle/data"

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      author {
        name
        photo {
          gatsbyImageData
          title
          file {
            url
          }
        }
      }
      date
      shortDescription
      title
      text {
        raw
      }
      titleImage {
        gatsbyImageData
        title
        file {
          url
        }
      }
      slug
      createdAt
      country {
        name
        flagLink
        slug
        places {
          slug
          name
          kindPlace
          titleImage {
            gatsbyImageData(placeholder: BLURRED, width: 200)
            title
          }
        }
      }
    }
  }
`

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%",
  },
  sidebarNewsletter: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
  },
  footerNewsletterSection: {
    background: theme.palette.primary.dark,
  },
}))
const BlogArticle = props => {
  const {
    title,
    shortDescription,
    titleImage,
    author,
    date,
    text,
    country,
  } = props.data.contentfulBlog

  const { setTitle } = useContext(MenuContext)
  useEffect(() => {
    setTitle(title)
    return () => {
      setTitle("")
    }
  }, [])

  const Article = () => {
    const classes = useStyles()
    return (
      <div className={classes.root}>
        <Hero
          cover={titleImage}
          title={title}
          subtitle={shortDescription}
          author={author}
          date={date}
        />
        <Section>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Content data={text} />
            </Grid>
            <Grid item xs={12} md={4}>
              {country.places.length > 1 && (
                <SidebarArticles data={country.places} />
              )}

              <SidebarNewsletter className={classes.sidebarNewsletter} />
            </Grid>
          </Grid>
        </Section>
        <Section>
          <SimilarStories data={similarStories} />
        </Section>
        {/*  <Section className={classes.footerNewsletterSection}>
          <FooterNewsletter />
        </Section> */}
      </div>
    )
  }

  return (
    <>
      <SEO
        title={title}
        description={shortDescription}
        image={`https:${titleImage.file.url}`}
      />
      <WithLayout component={Article} layout={Place} />
    </>
  )
}

export default BlogArticle
