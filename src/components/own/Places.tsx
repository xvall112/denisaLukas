import React, { useContext, useState, useEffect, useRef } from "react"

//materialUI
import { Box, Grid } from "@material-ui/core"
import Skeleton from "@material-ui/lab/Skeleton"
import { makeStyles } from "@material-ui/core/styles"
//components
import Card from "../own/PlacePageLayout/card"
import FullScreenMap from "../own/fullScreenMap"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    height: "100%",
  },
}))

const Places = ({ places }) => {
  const classes = useStyles()
  //load more
  const [list, setList] = useState([...places.slice(0, 8)])

  // State to trigger oad more
  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(places.length > 8)

  //Set a ref for the loading div
  const loadRef = useRef()

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle intersection with load more div
  const handleObserver = entities => {
    const target = entities[0]
    if (target.isIntersecting) {
      setLoadMore(true)
    }
  }

  //Initialize the intersection observer API
  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    }
    const observer = new IntersectionObserver(handleObserver, options)
    if (loadRef.current) {
      observer.observe(loadRef.current)
    }
  }, [])

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < places.length
      const nextResults = isMore
        ? places.slice(currentLength, currentLength + 8)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < places.length
    setHasMore(isMore)
  }, [list]) //eslint-disable-line
  return (
    <>
      {places.length === 0 ? (
        "Objevuj nová místa"
      ) : (
        <>
          <FullScreenMap markers={places} />
          <div className={classes.root}>
            <Grid container direction="row" spacing={3}>
              {list.map((item: any, index: number) => {
                return (
                  <Grid item xs={12} sm={12} md={4} lg={3} xl={2} key={index}>
                    <Card item={item} slug="places" />
                  </Grid>
                )
              })}
            </Grid>
          </div>

          <div ref={loadRef}>
            {hasMore && (
              <Box mb={4}>
                <Grid container direction="row" spacing={3}>
                  <Grid item xs={12} sm={12} md={4} lg={3} xl={2}>
                    <Skeleton
                      animation="wave"
                      variant="rect"
                      width="100%"
                      height="300px"
                    />
                    <Skeleton
                      animation="wave"
                      variant="text"
                      width="40%"
                      height="50px"
                    />
                    <Skeleton
                      animation="wave"
                      variant="text"
                      width="30%"
                      height="50px"
                    />
                  </Grid>
                </Grid>
              </Box>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default Places
