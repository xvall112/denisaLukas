import React, { useEffect, useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { MenuContext } from "../../providers/menu/menu.providers"
import { Divider } from "@material-ui/core"
import { Section, SectionAlternate } from "components/organisms"
import { Breadcrumb, Newsletter, Result } from "./components"

import { breadcrumb, result } from "./data"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),
    height: "100%",
    width: "100%",
  },
  sectionBreadcrumb: {
    "& .section-alternate__content": {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
}))

const BlogSearch = (): JSX.Element => {
  const classes = useStyles()
  const { filterCountry, setTitle } = useContext(MenuContext)
  useEffect(() => {
    setTitle("Blog")
    return () => {
      setTitle("")
    }
  }, [])
  return (
    <div className={classes.root}>
      <Result data={result} />
      <Section>
        <Newsletter />
      </Section>
      <Divider />
    </div>
  )
}

export default BlogSearch
