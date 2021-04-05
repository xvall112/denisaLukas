import React from "react"

//materialUI
import Tooltip from "@material-ui/core/Tooltip"

interface Props {
  className?: any
  name: string
  flagLink: string
}

const FlagChip = ({ className, name, flagLink }: Props): JSX.Element => {
  return (
    <div>
      <Tooltip title={name} aria-label="add">
        <img src={flagLink} width="30" alt={name} className={className} />
      </Tooltip>
    </div>
  )
}

export default FlagChip
