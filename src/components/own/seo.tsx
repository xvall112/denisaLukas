/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
  description?: String
  title: String
  image?: String
  article?: Boolean
  children?: any
}
const SEO = ({
  description,
  title,
  image,
  article,
  children,
}: Props): JSX.Element => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            siteUrl
            defaultDescription: description
            defaultImage: image
            social {
              twitter
            }
          }
        }
      }
    `
  )
  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    social,
    titleTemplate,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <>
      <title>{`${seo.title}${titleTemplate}`}</title>
      <meta name="locale" content="cs" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />
      {social.twitter && (
        <meta name="twitter:creator" content={social.twitter} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}

      {/* {name && <meta property="og:site_name" content={name} />} */}
      <meta property="og:locale" content={pathname} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content={seo.title} />

      <link
        rel="apple-touch-startup-image"
        href="images/manifestIcon.png"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="images/manifestIcon.png"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="images/manifestIcon.png"
        media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="images/manifestIcon.png"
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="images/manifestIcon.png"
        media="(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="images/manifestIcon.png"
        media="(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
      />
      <link
        rel="apple-touch-startup-image"
        href="images/manifestIcon.png"
        media="(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
      />

      {children}
    </>
  )
}

export default SEO
