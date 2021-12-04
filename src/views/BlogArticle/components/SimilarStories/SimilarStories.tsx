import React from "react"
import { useStaticQuery, graphql, Link, navigate } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { makeStyles } from "@material-ui/core/styles"
import { Button, Typography, Grid } from "@material-ui/core"
import { Image } from "components/atoms"
import { DescriptionCta } from "components/molecules"
import { CardProduct } from "components/organisms"

export const query = graphql`
  {
    allContentfulBlog(limit: 3, filter: { node_locale: { eq: "cs" } }) {
      nodes {
        author {
          name
        }
        shortDescription
        date
        slug
        title
        titleImage {
          title
          gatsbyImageData(placeholder: BLURRED, width: 500)
        }
      }
    }
  }
`

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: theme.spacing(3),
    "& a": { textDecoration: "none" },
  },
  cardProduct: {
    display: "flex",
    flexDirection: "column",
    borderRadius: theme.spacing(1),
    "& .card-product__content": {
      padding: theme.spacing(2),
    },
    "& .card-product__media": {
      minHeight: 300,
    },
  },
  image: {
    objectFit: "cover",
  },
  blogTitle: {
    fontWeight: 700,
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  tag: {
    fontWeight: 700,
    margin: theme.spacing(0, 1, 1, 0),
  },
  author: {
    marginTop: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(2),
    },
  },
  title: {
    fontWeight: "bold",
  },
  descriptionCta: {
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(1),
    },
  },
}))

const SimilarStories = ({
  className,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles()
  const data = useStaticQuery(query)

  const BlogContent = (props: any) => (
    <div>
      {/*   <div className={classes.tags}>
        {props.tags.map((item: any, index: number) => (
          <Typography
            variant="overline"
            color="primary"
            className={classes.tag}
            key={index}
          >
            {item}
          </Typography>
        ))}
      </div> */}
      <Typography
        variant="h4"
        color="primary"
        className={classes.blogTitle}
        align="center"
      >
        {props.title}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        className={classes.author}
        align="center"
      >
        {props.shortDescription}
      </Typography>
      <Typography
        variant="body2"
        color="textPrimary"
        className={classes.author}
        align="center"
      >
        <i>
          {props.author.name} - {props.date}
        </i>
      </Typography>
    </div>
  )

  return (
    <div className={classes.root} {...rest}>
      <DescriptionCta
        title="Další články"
        primaryCta={
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => {
              navigate("/Blog")
            }}
          >
            Objevit vše
          </Button>
        }
        align={"left"}
        titleProps={{
          variant: "h4",
          color: "textPrimary",
          className: classes.title,
        }}
        className={classes.descriptionCta}
        data-aos="fade-up"
      />
      <Grid container spacing={2}>
        {data.allContentfulBlog.nodes.map((item: any, index: number) => (
          <Grid item xs={12} sm={12} md={3} key={index} data-aos="fade-up">
            <Link to={`/${item.slug}`}>
              <CardProduct
                withShadow
                align="center"
                liftUp
                className={classes.cardProduct}
                mediaContent={
                  <GatsbyImage
                    image={item.titleImage.gatsbyImageData}
                    alt={item.titleImage.title}
                    formats={["auto", "webp", "avif"]}
                    style={{ height: "100%", width: "100%" }}
                  />
                }
                cardContent={
                  <BlogContent
                    title={item.title}
                    subtitle={item.subtitle}
                    author={item.author}
                    date={item.date}
                    shortDescription={item.shortDescription}
                    /*  tags={item.tags} */
                  />
                }
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default SimilarStories
