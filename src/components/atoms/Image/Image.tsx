import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
  },
  dBlock: {
    display: "block",
  },
}))

/**
 * Component to display the images
 *
 * @param {Object} props
 */
const Image = ({
  src,
  srcSet,
  alt = "...",
  lazy = true,
  lazyProps = {
    width: "auto",
    height: "auto",
  },
  className,
  ...rest
}: ImageProps): JSX.Element => {
  const classes = useStyles()

  return (
    <img
      className={clsx("image", classes.root, className)}
      alt={alt}
      src={src}
      srcSet={srcSet}
      {...rest}
    />
  )
}

export default Image
