import React, { useEffect, useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { MenuContext } from "../../providers/menu/menu.providers"
import { Container } from "@material-ui/core"
import { Breadcrumb, Newsletter, Result } from "./components"

export const query = graphql`
  {
    allContentfulBlog(filter: { node_locale: { eq: "cs" } }) {
      totalCount
      nodes {
        author {
          name
          photo {
            file {
              url
            }
          }
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
    marginTop: theme.spacing(8),
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
  const data = useStaticQuery(query)
  const blog = data.allContentfulBlog.nodes
  const classes = useStyles()
  const { setTitle } = useContext(MenuContext)
  useEffect(() => {
    setTitle("Blog")
    return () => {
      setTitle("")
    }
  }, [])
  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Result data={blog} />
        {/* <Section>
        <Newsletter />
      </Section> */}
      </Container>
    </div>
  )
}

export default BlogSearch
