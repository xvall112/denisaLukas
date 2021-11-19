import { graphql, useStaticQuery } from "gatsby"

export const useContentfulAsset = (assetUrl: string) => {
  const { assets } = useStaticQuery(
    graphql`
      query CONTENTFUL_ASSET_QUERY {
        assets: allContentfulPlaces {
          edges {
            node {
              contentful_id
              slug
              name
              titleImage {
                contentful_id
                gatsbyImageData(layout: FULL_WIDTH, height: 500)
                title
              }
              rating
              kindPlace
              country {
                name
                flagLink
              }
            }
          }
        }
      }
    `
  )
  const asset = assets.edges.find(({ node }) => node.contentful_id === assetUrl)
  return asset
}
