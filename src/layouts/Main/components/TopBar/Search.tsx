import * as React from "react"
import { Link } from "gatsby"
//Material UI
import { InputBase, Box } from "@material-ui/core"
import { createStyles, fade, Theme, makeStyles } from "@material-ui/core/styles"
import SearchIcon from "@material-ui/icons/Search"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.level1,

      color: theme.palette.text.primary,
      marginLeft: 0,
      height: "100%",
      width: "100%",
      border: "1px solid black",
      [theme.breakpoints.up("md")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
      "&:hover": {
        boxShadow: theme.shadows[3],
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  })
)

const Search = () => {
  const classes = useStyles()
  return (
    <Link to={"/search"}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Kam cestuješ?"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "Kam cestuješ?" }}
        />
      </div>
    </Link>
  )
}

export default Search
