import React, { useContext, useState, useEffect, useRef } from "react"

//materialUI
import { Box, CircularProgress } from "@material-ui/core"

//components
import Card from "../../../../components/own/PlacePageLayout/card"
import NoFavourite from "./noFavourite"
import FullScreenMap from "../../../../components/own/fullScreenMap"

const PlacesCountry = ({ places, country }) => {
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
        <NoFavourite
          title="Nemáte žádná oblíbená místa"
          button="Objevuj nová místa"
          slug="/places"
        />
      ) : (
        <>
          <FullScreenMap
            markers={places}
            zoom={country.mapZoom}
            center={country.countryCenterLocation}
            title={country.name}
          />
          <Card data={list} four slug="places" />
          <div ref={loadRef}>
            {hasMore && (
              <Box textAlign="center">
                <CircularProgress color="primary" />
              </Box>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default PlacesCountry
