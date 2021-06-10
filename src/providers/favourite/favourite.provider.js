import React, { createContext, useState } from "react"
import firebase from "gatsby-plugin-firebase"

export const FavouriteContext = createContext({
  favouriteItems: [],
  loading: false,
  error: null,
  fetchFavouriteItems: user => {},
  addFavouriteItem: (user, itemId) => {},
  removeFavouriteItem: (user, itemId) => {},
})

const FavouriteProvider = ({ children }) => {
  const [favouriteItems, setFavouriteItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchFavouriteItems = async user => {
    if (!user) {
      setFavouriteItems([])
    } else {
      const favouriteItemsRef = await firebase
        .firestore()
        .collection("users")
        .doc(user.uid)

      const snapShot = await favouriteItemsRef.get()

      if (!snapShot.exists) {
        setFavouriteItems([])
      } else {
        try {
          favouriteItemsRef.onSnapshot(doc => {
            const { favouriteItems } = doc.data()
            setFavouriteItems(favouriteItems)
          })
        } catch (error) {
          console.log(error)
          setError(error)
        }
      }
    }
  }

  const addFavouriteItem = async (user, itemId) => {
    if (!user) {
      console.log("prihlaste se")
    } else {
      const favouriteItemsRef = await firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
      const snapShot = await favouriteItemsRef.get()
      if (!snapShot.exists) {
        try {
          await favouriteItemsRef.set({
            favouriteItems: [itemId],
          })
        } catch (error) {
          console.log("error creating user", error.message)
        }
        await fetchFavouriteItems(user)
      } else {
        try {
          await favouriteItemsRef.update({
            favouriteItems: firebase.firestore.FieldValue.arrayUnion(itemId),
          })
        } catch (error) {
          setError(error)
        }
      }
    }
  }

  const removeFavouriteItem = async (user, itemId) => {
    if (!user) {
      console.log("prihlaste se")
    } else {
      const favouriteItemsRef = await firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
      try {
        await favouriteItemsRef.update({
          favouriteItems: firebase.firestore.FieldValue.arrayRemove(itemId),
        })
      } catch (error) {
        setError(error)
      }
    }
  }

  return (
    <FavouriteContext.Provider
      value={{
        loading,
        error,
        favouriteItems,
        fetchFavouriteItems,
        addFavouriteItem,
        removeFavouriteItem,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  )
}
export default FavouriteProvider
