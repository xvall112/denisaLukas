import React from "react"
import { PullToRefresh } from "react-js-pull-to-refresh"
import {
  PullDownContent,
  ReleaseContent,
  RefreshContent,
} from "react-js-pull-to-refresh"
const ReactPullToRefresh = ({ children }) => {
  const onRefresh = () => {
    return new Promise(resolve => {
      resolve(window.location.reload())
    })
  }

  return (
    <PullToRefresh
      pullDownContent={<PullDownContent />}
      releaseContent={<ReleaseContent />}
      refreshContent={<RefreshContent />}
      pullDownThreshold={200}
      onRefresh={() => onRefresh()}
      triggerHeight={40}
      backgroundColor="black"
      startInvisible={true}
    >
      {children}
    </PullToRefresh>
  )
}

export default ReactPullToRefresh
