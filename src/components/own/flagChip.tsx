import React from "react"

//materialUI
import Tooltip from "@material-ui/core/Tooltip"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({}))

interface Props {
  className?: any
  name: string
  flagLink: string
  width: number
}

const FlagChip = ({ className, name, flagLink, width }: Props): JSX.Element => {
  const classes = useStyles()
  return (
    <>
      <Tooltip title={name} aria-label="add">
        <img
          src={flagLink}
          style={{ width: width, height: "auto" }}
          alt={name}
          className={className}
        />
      </Tooltip>
    </>
  )
}

export default FlagChip
