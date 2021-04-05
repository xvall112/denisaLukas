import React from "react"
import { Link } from "gatsby"
//materiaUI
import { Box, Grid, useMediaQuery } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"

const useStyles = makeStyles(theme => ({
  root: {},
  link: {
    "& .icon": {
      fontSize: 32,
      height: "100%",
      opacity: 1,
      textAlign: "right",
      [theme.breakpoints.up("md")]: {
        opacity: 0,
      },
    },
    "& span": {
      height: "100%",
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "inline",
        opacity: 0,
        fontSize: 18,
        transition: "all 0.5s ease-out",
      },
    },
    color: theme.palette.text.primary,
    textDecoration: "none",
    "& :hover": {
      color: theme.palette.text.primary,
      "& .icon": {
        opacity: 1,
      },
      "& span": {
        opacity: 1,
        marginLeft: theme.spacing(2),
      },
    },
  },
}))

interface props {
  title: string
  link: string
}
const TitleSection = ({ title, link }: props): JSX.Element => {
  const classes = useStyles()
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })
  return (
    <div className={classes.root}>
      <Link to={link} className={classes.link}>
        <Box fontSize={32} mb={2}>
          <Grid
            container
            direction="row"
            justify={isMd ? "flex-start" : "space-between"}
            alignItems="center"
          >
            {title}
            <span>Prozkoumat vše</span>
            <NavigateNextIcon className="icon" />
          </Grid>
        </Box>
      </Link>
    </div>
  )
}

export default TitleSection
