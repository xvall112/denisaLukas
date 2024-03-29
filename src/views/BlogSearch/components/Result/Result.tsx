import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import {
  useMediaQuery,
  Container,
  Avatar,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core"

import { CardProduct } from "components/organisms"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    "& a": { textDecoration: "none" },
  },
  pagePaddingTop: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
  sectionAlternate: {
    "& .section-alternate__content": {
      padding: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up("md")]: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
      },
    },
  },
  searchInputContainer: {
    background: theme.palette.alternate.main,
    padding: theme.spacing(2),
    boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.11)",
    borderRadius: theme.spacing(1),
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "0 !important",
    },
    "& .MuiInputAdornment-positionStart": {
      marginRight: theme.spacing(2),
    },
    "& .MuiOutlinedInput-adornedStart": {
      paddingLeft: 0,
    },
    "& .MuiOutlinedInput-input": {
      padding: 0,
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  },
  searchButton: {
    maxHeight: 45,
    minWidth: 135,
    [theme.breakpoints.down("sm")]: {
      minWidth: "auto",
    },
  },
  cardProduct: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    borderRadius: theme.spacing(1),
    "& .card-product__content": {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  image: {
    objectFit: "cover",
    borderRadius: theme.spacing(0, 0, 20, 0),
  },
  blogContent: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  list: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatarContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  button: {
    minWidth: "100%",
    maxWidth: "100%",
    [theme.breakpoints.up("sm")]: {
      minWidth: 420,
    },
  },
  answerCount: {
    padding: theme.spacing(1 / 2, 1),
    borderRadius: theme.spacing(1),
    background: theme.palette.background.level2,
    color: "white",
    fontWeight: 300,
  },
}))

const Result = ({
  data,
  className,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  const BlogContent = (props: any) => (
    <div className={classes.blogContent}>
      <Typography variant="h4" color="textPrimary" gutterBottom>
        {props.title}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {props.subtitle}
      </Typography>
      <div style={{ flexGrow: 1 }} />
      <Divider className={classes.divider} />
      <div className={classes.list}>
        <div className={classes.avatarContainer}>
          <Avatar
            src={props.author.photo.file.url}
            alt={props.author.photo.title}
            className={classes.avatar}
          />
          <Typography variant="body2" color="textPrimary">
            {props.author.name}
          </Typography>
        </div>
        <Typography variant="overline" color="textSecondary">
          {props.date}
        </Typography>
      </div>
    </div>
  )

  return (
    <div className={classes.root} {...rest}>
      {/* <Section className={classes.pagePaddingTop}>
        <div className={classes.searchInputContainer} data-aos="fade-up">
          <FormControl fullWidth variant="outlined">
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start">
                  <Icon
                    fontIconClass="fas fa-search"
                    fontIconColor={colors.blueGrey[900]}
                  />
                </InputAdornment>
              }
              placeholder="Search for the blog"
            />
          </FormControl>
          <Button
            color="primary"
            variant="contained"
            size="large"
            className={classes.searchButton}
          >
            Vyhledat
          </Button>
        </div>
      </Section> */}

      <Grid container spacing={isMd ? 4 : 2}>
        {/* <Grid item xs={12} container>
            <Typography variant="body1" className={classes.answerCount}>
              {data.length} Článek
            </Typography>
          </Grid> */}
        {data.map((item: any, index: number) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            xl={2}
            key={index}
            data-aos="fade-up"
          >
            <Link to={`/${item.slug}`}>
              <CardProduct
                withShadow
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
                    subtitle={item.shortDescription}
                    author={item.author}
                    date={item.date}
                  />
                }
              />
            </Link>
          </Grid>
        ))}
        {/*  <Grid item xs={12} container justify="center">
            <Button
              variant="outlined"
              color="primary"
              size="large"
              className={classes.button}
            >
              Load more
            </Button>
          </Grid> */}
      </Grid>
    </div>
  )
}

export default Result
