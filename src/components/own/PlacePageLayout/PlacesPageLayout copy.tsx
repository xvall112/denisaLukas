import React, { useContext, useState, useEffect, useRef } from "react"
import { MenuContext } from "../../../providers/menu/menu.providers"

//materialUI
import { Grid, Box, Container, useMediaQuery, Hidden } from "@material-ui/core"
import Skeleton from "@material-ui/lab/Skeleton"
import { makeStyles, useTheme } from "@material-ui/core/styles"

//components
/* import LeafletMap from "../LeafletMap"
import Filter from "./Filter" */
import Card from "./card"
import FullScreenMap from "../fullScreenMap"
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    height: "100%",
  },

  map: {
    width: "100vw",
    height: "50vh",
    [theme.breakpoints.up("md")]: {
      width: "50vw",
      height: "100vh",
      position: "fixed",
      top: "0px",
    },
  },
}))
interface Props {
  data: any
}
const IndexPlaces = ({ data }: Props): JSX.Element => {
  const {
    filterCountry,
    filterCountryLocation,
    filterCountryZoom,
    loadList,
    handleSetLoadList,
  } = useContext(MenuContext)

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })
  const classes = useStyles()

  //load more
  const [list, setList] = useState([...data.slice(0, loadList)])

  // State to trigger oad more
  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(data.length > 10)

  //Set a ref for the loading div
  const loadRef = useRef()

  // Handle intersection with load more div
  const handleObserver = entities => {
    const target = entities[0]
    if (target.isIntersecting) {
      setLoadMore(true)
    }
  }

  useEffect(() => {
    setList([...data.slice(0, loadList < 10 ? 8 : loadList)])
  }, [])
  //Initialize the intersection observer API
  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "500px",
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
      const isMore = currentLength < data.length
      const nextResults = isMore
        ? data.slice(currentLength, currentLength + 10)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }

    return () => {
      handleSetLoadList(list.length)
    }
  }, [loadMore, hasMore, data]) //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < data.length
    setHasMore(isMore)
  }, [list]) //eslint-disable-line

  return (
    <Box mb={10}>
      <Grid container direction={isMd ? "row" : "column-reverse"}>
        <Grid item xs={12} /* md={6} */>
          <Container maxWidth="xl">
            <div className={classes.root}>
              <Grid container direction="row" spacing={3}>
                {data.map((item: any, index: number) => {
                  return (
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={2} key={index}>
                      <Card item={item} />
                    </Grid>
                  )
                })}

                {hasMore && (
                  <Grid item xs={12} sm={6} md={3} lg={3} xl={2} ref={loadRef}>
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
                )}
              </Grid>
            </div>
            {/* {hasMore ? (
              <Button
                variant="outlined"
                fullWidth
                color="primary"
                onClick={handleLoadMore}
              >
                Load More
              </Button>
            ) : (
              <p>No more results</p>
            )} */}
          </Container>
        </Grid>
        <FullScreenMap
          markers={data}
          zoom={filterCountryZoom}
          center={filterCountryLocation}
        />
        {/*   <Hidden mdDown>
          <Grid item xs={12} md={6}>
            <div className={classes.map}>
              <LeafletMap
                zoom={filterCountryZoom}
                center={filterCountryLocation}
                marker={data}
              />
            </div>
          </Grid>
        </Hidden> */}
      </Grid>
    </Box>
  )
}

export default IndexPlaces
