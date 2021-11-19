import React, { useEffect, useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { MenuContext } from "../providers/menu/menu.providers"
//components
import SEO from "../components/own/seo"
import WithLayout from "../../WithLayout"
import Place from "../layouts/Place/Place"
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"
import { Section, SectionAlternate } from "components/organisms"
import {
  Content,
  FooterNewsletter,
  Hero,
  SidebarArticles,
  SidebarNewsletter,
  SimilarStories,
} from "../views/BlogArticle/components"
import {
  content,
  sidebarArticles,
  similarStories,
} from "../views/BlogArticle/data"

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
        <SectionAlternate>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Content data={text} />
            </Grid>
            <Grid item xs={12} md={4}>
              <SidebarArticles data={sidebarArticles} />
              <SidebarNewsletter className={classes.sidebarNewsletter} />
            </Grid>
          </Grid>
        </SectionAlternate>
        <SectionAlternate>
          <SimilarStories data={similarStories} />
        </SectionAlternate>
        <SectionAlternate className={classes.footerNewsletterSection}>
          <FooterNewsletter />
        </SectionAlternate>
      </div>
    )
  }

  return (
    <>
      <SEO title={title} />
      <WithLayout component={Article} layout={Place} />
    </>
  )
}

export default BlogArticle
