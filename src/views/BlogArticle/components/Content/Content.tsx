import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import {
  useMediaQuery,
  Typography,
  GridList,
  GridListTile,
  IconButton,
  Box,
} from "@material-ui/core"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import InstagramIcon from "@material-ui/icons/Instagram"
import PinterestIcon from "@material-ui/icons/Pinterest"
import { Image } from "components/atoms"

//components
import ContentfulBody from "../../../../templates/components/contentfulBody"

const useStyles = makeStyles(theme => ({
  section: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(4),
    },
  },
  image: {
    objectFit: "cover",
    borderRadius: theme.spacing(1),
  },
  socialIcon: {
    borderRadius: 0,
    marginRight: theme.spacing(2),
    color: theme.palette.text.primary,
    background: theme.palette.alternate.main,
    "&:last-child": {
      marginRight: 0,
    },
  },
}))

const Content = ({
  data,
  className,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  return (
    <Box className={className} {...rest} mx={{ xs: 0, md: 10 }}>
      <ContentfulBody body={data} />
      <div>
        {/* <IconButton className={classes.socialIcon}>
          <FacebookIcon />
        </IconButton> */}
        {/* <IconButton className={classes.socialIcon}>
          <InstagramIcon />
        </IconButton> */}
        {/* <IconButton className={classes.socialIcon}>
          <TwitterIcon />
        </IconButton>
       <IconButton className={classes.socialIcon}>
          <PinterestIcon />
        </IconButton>  */}
      </div>
    </Box>
  )
}

export default Content
