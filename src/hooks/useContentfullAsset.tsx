import { graphql, useStaticQuery } from "gatsby"

export const useContentfulAsset = (assetUrl: string) => {
  const { assets, ferratas } = useStaticQuery(
    graphql`
      query CONTENTFUL_ASSET_QUERY {
        assets: allContentfulPlaces {
          edges {
            node {
              contentful_id
              slug
              name
              seoDescribe
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
        ferratas: allContentfulViaFerrata {
          edges {
            node {
              contentful_id
              slug
              name
              seoDescription
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
  const ferrata = ferratas.edges.find(
    ({ node }) => node.contentful_id === assetUrl
  )
  return asset ? asset : ferrata
}
