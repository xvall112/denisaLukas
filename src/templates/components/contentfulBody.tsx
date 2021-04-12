import React from "react"
//hooks
import { useContentfulImage } from "../../hooks/useContentfulImage"
import { Typography, Box } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
const options = {
  renderMark: {
    [MARKS.BOLD]: text => <b>{text}</b>,
    [MARKS.ITALIC]: text => <i>{text}</i>,
    [MARKS.CODE]: text => <code>{text}</code>,
    [MARKS.BOLD]: text => <b>{text}</b>,
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => (
      <Typography variant="h1">{children}</Typography>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <Typography variant="h2">{children}</Typography>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <Typography variant="h3">{children}</Typography>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <Typography variant="h4">{children}</Typography>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <Typography variant="h5">{children}</Typography>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <Typography variant="h6">{children}</Typography>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Box textAlign="justify">
        <Typography variant="subtitle1">{children}</Typography>
      </Box>
    ),
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const asset = useContentfulImage(node.data.target.sys.id)
      if (asset) {
        return (
          <>
            <Box my={2}>
              <GatsbyImage
                image={asset.node.gatsbyImageData}
                alt={asset.node.title}
                formats={["auto", "webp", "avif"]}
                style={{
                  maxWidth: "90%",
                  margin: "0 auto",
                  borderRadius: "5px",
                }}
              />
              <Box textAlign="center">
                <Typography variant="caption">{asset.node.title}</Typography>
              </Box>
            </Box>
          </>
        )
      }
    },
  },
}

const ContentfulBody = ({ body }) => {
  return <div>{body && renderRichText(body, options)}</div>
}

export default ContentfulBody
