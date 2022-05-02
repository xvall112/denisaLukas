import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import { colors, Typography, Grid } from "@material-ui/core"
import { Image } from "components/atoms"
import { CardProduct } from "components/organisms"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(2),
    "& a": { textDecoration: "none" },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(3),
    },
  },
  gridItem: {
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderBottom: `1px solid ${colors.grey[200]}`,
    "&:hover": {
      borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
    "&:last-child": {
      marginBottom: 0,
      borderBottom: 0,
      paddingBottom: 0,
    },
  },
  cardProduct: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    boxShadow: "none",
    borderRadius: 0,
    "& .card-product__content": {
      padding: 0,
      paddingLeft: theme.spacing(2),
    },
    "& .card-product__media": {
      height: 90,
      width: 90,
      "& img": {
        height: 90,
        width: 90,
      },
    },
  },
  image: {
    objectFit: "cover",
  },
  blogContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
  },
  blogTitle: {
    fontWeight: 700,
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
  },
  tag: {
    margin: theme.spacing(0, 1 / 2, 1 / 2, 0),
    textTransform: "uppercase",
    fontWeight: 700,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(3),
    },
  },
}))

const SidebarArticles = ({
  data,
  className,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles()
  console.log("side content", data)

  const BlogContent = (props: any) => (
    <div className={classes.blogContent}>
      {/*  <div className={classes.tags}>
        {props.tags.map((item: any, index: number) => (
          <Typography
            variant="caption"
            color="primary"
            className={classes.tag}
            key={index}
          >
            {item}
          </Typography>
        ))}
      </div>  */}
      <Typography
        variant="body2"
        color="textPrimary"
        className={classes.blogTitle}
        gutterBottom
      >
        {props.name}
      </Typography>
      <Typography variant="caption" color="textPrimary">
        <i> {props.subtitle}</i>
      </Typography>
    </div>
  )

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Typography
        variant="h6"
        color="textPrimary"
        gutterBottom
        className={classes.sectionTitle}
      >
        Další místa
      </Typography>
      <Grid container spacing={0}>
        {data.length > 1 &&
          data.map((item: any, index: number) => (
            <Grid
              item
              xs={12}
              data-aos="fade-up"
              className={classes.gridItem}
              key={index}
            >
              <Link to={`/${item.slug}`}>
                <CardProduct
                  className={classes.cardProduct}
                  mediaContent={
                    <GatsbyImage
                      image={item.titleImage.gatsbyImageData}
                      alt={item.titleImage.title}
                      formats={["auto", "webp", "avif"]}
                      style={{ height: "100%" }}
                    />
                  }
                  cardContent={
                    <BlogContent
                      name={item.name}
                      subtitle={item.kindPlace}
                      /* author={item.author} */

                      /* tags={item.tags} */
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

export default SidebarArticles
