import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
//hooks
import { useContentfulAsset } from "../../hooks/useContentfullAsset"
import { useContentfulImage } from "../../hooks/useContentfulImage"
//materialUI
import {
  Typography,
  Box,
  Grid,
  makeStyles,
  Chip,
  Hidden,
} from "@material-ui/core"
import { Alert, AlertTitle } from "@material-ui/lab"
import Rating from "@material-ui/lab/Rating"
//components
import FlagChip from "../../components/own/flagChip"

const useStyles = makeStyles(theme => ({
  root: {
    border: "1px solid ",
    borderColor: theme.palette.text.secondary,
    borderRadius: "10px",
    "& a": {
      textDecoration: "none",
      color: theme.palette.text.primary,
    },
    "&:hover": {
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },
  hyperlink: {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
  img: {
    borderRadius: "5px",
    WebkitBorderRadius: "5px",
    overflow: "hidden",
    "& img": {
      borderRadius: "5px",
      WebkitBorderRadius: "5px",
    },
  },
  flag: {
    borderRadius: theme.spacing(0.5),
  },
}))

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <b>{text}</b>,
    [MARKS.ITALIC]: text => <i>{text}</i>,
    [MARKS.CODE]: text => <code>{text}</code>,
  },

  renderNode: {
    [INLINES.HYPERLINK]: ({ data }, children) => (
      <a style={{ textDecoration: "none", color: "gold" }} href={data.uri}>
        {children}
      </a>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <Box mt={3}>
        <Typography variant="h1">{children}</Typography>
      </Box>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <Box mt={3}>
        <Typography variant="h2">{children}</Typography>
      </Box>
    ),

    [BLOCKS.HEADING_3]: (node, children) => (
      <Box mt={3}>
        <Typography variant="h3">{children}</Typography>
      </Box>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <Box mt={3}>
        <Typography variant="h4">{children}</Typography>
      </Box>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <Box mt={3}>
        <Typography variant="h5">{children}</Typography>
      </Box>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <Box mt={3}>
        <Typography variant="h6">{children}</Typography>
      </Box>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Box
        textAlign="justify"
        mt={2}
        lineHeight={{ xs: 1.5 }}
        fontSize={{ xs: "1rem", md: "1.2rem" }}
      >
        {children}
      </Box>
    ),
    [BLOCKS.QUOTE]: (node, children) => (
      <Box textAlign="justify" mt={2}>
        <Alert severity="info">
          <AlertTitle>Tip</AlertTitle>
          <Typography variant="subtitle1">{children}</Typography>
        </Alert>
      </Box>
    ),
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const assetImage = useContentfulImage(node.data.target.sys.id)

      const classes = useStyles()

      if (assetImage) {
        return (
          <>
            <Box my={2} className={classes.img}>
              <GatsbyImage
                image={assetImage.node.gatsbyImageData}
                alt={assetImage.node.title}
                formats={["auto", "webp", "avif"]}
                style={{
                  width: "100%",
                  maxHeight: "80vh",
                  /*      borderRadius: "5px",
                  WebkitBorderRadius: "5px", */
                }}
              />
              <Box textAlign="center">
                <Typography variant="caption">
                  {assetImage.node.title}
                </Typography>
              </Box>
            </Box>
          </>
        )
      }
    },

    [BLOCKS.EMBEDDED_ENTRY]: node => {
      const asset = useContentfulAsset(node.data.target.sys.id)
      const classes = useStyles()
      if (asset) {
        return (
          <Box p={1} mx={{ xs: 0, md: 2 }} my={2} className={classes.root}>
            <Link to={`/${asset.node.slug}`}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                item
                xs={12}
                spacing={2}
              >
                <Grid item xs={6} md={4}>
                  <Box className={classes.img}>
                    <GatsbyImage
                      image={asset.node.titleImage.gatsbyImageData}
                      alt={asset.node.titleImage.title}
                      formats={["auto", "webp", "avif"]}
                      style={{
                        width: "100%",
                        height: "150px",
                      }}
                    />
                  </Box>
                </Grid>
                <Grid
                  container
                  direction="column"
                  item
                  xs={6}
                  md={8}
                  spacing={2}
                >
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    item
                    xs={12}
                    spacing={1}
                  >
                    <Grid item xs={12}>
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        spacing={1}
                      >
                        <Grid item>
                          <Grid
                            container
                            direction="row"
                            alignItems="center"
                            spacing={1}
                          >
                            <Grid item>
                              <FlagChip
                                name={asset.node.country.name}
                                flagLink={asset.node.country.flagLink}
                                className={classes.flag}
                                width={40}
                              />
                            </Grid>

                            {asset.node.kindPlace.map((item, index) => {
                              return (
                                <Grid item>
                                  <Chip label={item} key={index} size="small" />
                                </Grid>
                              )
                            })}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Rating
                        name="half-rating-read"
                        defaultValue={asset.node.rating || 5}
                        precision={0.5}
                        readOnly
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h5">{asset.node.name}</Typography>
                    </Grid>
                    <Hidden smDown>
                      <Grid item xs={12}>
                        <Typography variant="subtitle">
                          {asset.node.seoDescribe || asset.node.seoDescription}
                        </Typography>
                      </Grid>
                    </Hidden>
                  </Grid>
                </Grid>
              </Grid>
            </Link>
          </Box>
        )
      }
    },
  },
}

const ContentfulBody = ({ body }) => {
  return <div>{body && renderRichText(body, options)}</div>
}

export default ContentfulBody
