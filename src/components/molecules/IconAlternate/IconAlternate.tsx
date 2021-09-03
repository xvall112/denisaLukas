import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import { Avatar } from "@material-ui/core"
import { Icon } from "components/atoms"

const useStyles = makeStyles(theme => ({
  extraSmall: {
    width: 20,
    height: 20,
  },
  small: {
    width: 50,
    height: 50,
  },
  medium: {
    width: 70,
    height: 70,
  },
  large: {
    width: 90,
    height: 90,
  },
  circle: {
    borderRadius: "100%",
  },
  square: {
    borderRadius: theme.spacing(2),
  },
}))

/**
 * Component to display the alternate icon
 *
 * @param {Object} props
 */
const IconAlternate = ({
  iconProps,
  fontIconClass,
  size = "medium",
  color = [],
  shape = "square",
  className,
  ...rest
}: IconAlternateProps): JSX.Element => {
  const classes = useStyles()
  const useBackgroundStyles = makeStyles(theme => ({
    background: {
      background:
        "linear-gradient(93deg, rgba(250,229,150,0.500437675070028) 0%, rgba(250,229,150,1) 46%, rgba(250,229,150,0.500437675070028) 100%)",
    },
  }))
  const backgroundClasses = useBackgroundStyles()

  return (
    <Avatar
      className={clsx(
        "icon-alternate",
        classes[size],
        classes[shape],
        backgroundClasses.background,
        className
      )}
      {...rest}
    >
      <Icon
        size={size}
        fontIconClass={fontIconClass}
        fontIconColor="black"
        className="icon-alternate__icon"
        {...iconProps}
      />
    </Avatar>
  )
}

export default IconAlternate
