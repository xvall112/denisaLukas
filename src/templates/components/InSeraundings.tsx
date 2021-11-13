import React from "react"
import PlacesLayout from "../../components/own/indexView/PlacesLayout"
import { Divider, Box } from "@material-ui/core"

interface Props {
  inSurrounding?: any
}

const InSeraundings = ({ inSurrounding }: Props): JSX.Element => {
  console.log("inSurrounding", inSurrounding)
  return (
    <div>
      <PlacesLayout
        data={inSurrounding.inSurrounding}
        slug={`/${inSurrounding.country.slug}`}
        title="V okolí"
      />
      <Box my={2}>
        <Divider />
      </Box>
    </div>
  )
}

export default InSeraundings
