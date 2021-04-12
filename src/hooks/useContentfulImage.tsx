import { graphql, useStaticQuery } from "gatsby"

export const useContentfulImage = (assetUrl: string) => {
  const { assets } = useStaticQuery(
    graphql`
      query CONTENTFUL_IMAGE_QUERY {
        assets: allContentfulAsset {
          edges {
            node {
              contentful_id
              gatsbyImageData(layout: FULL_WIDTH)
              title
            }
          }
        }
      }
    `
  )
  const asset = assets.edges.find(({ node }) => node.contentful_id === assetUrl)
  return asset
}
