import React, { createContext, useState } from "react"
import firebase from "gatsby-plugin-firebase"

export const createUserProfileDocument = async userAuth => {
  if (!userAuth) return

  const userRef = await firebase.firestore().doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email, photoURL, uid } = userAuth
    const createAt = new Date()

    try {
      await userRef.set({
        id: uid,
        displayName,
        email,
        createAt,
        photoURL,
        favouriteItems: [],
      })
    } catch (error) {
      console.log("error creating user", error.message)
    }
  }
  return userRef
}

export const UserContext = createContext({
  favouriteItems: [],
  currentUser: null,
  loading: false,
  error: null,
  isUserSnackbarOpen: false,
  snackbarMessage: "",
  isModalOpen: false,
  signUp: (email, password, name) => {},
  logout: () => {},
  resetPassword: email => {},
  signIn: (email, password) => {},
  fetchFavouriteItems: () => {},
  addFavouriteItem: itemId => {},
  removeFavouriteItem: itemId => {},
  isUserAuth: () => {},
  closeUserSnackbar: () => {},
  closeModal: () => {},
  addNewsletter: email => {},
  updateAccount: name => {},
})

const UserProvider = ({ children }) => {
  const [snackbarMessage, setSnackbarMessage] = useState("initialState")
  const [isUserSnackbarOpen, setIsUserSnackbarOpen] = useState(false)
  const [favouriteItems, setFavouriteItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [currentUser, setCurrentUser] = useState(null)
  const [isModalOpen, setisModalOpen] = useState(false)

  const closeUserSnackbar = () => {
    setIsUserSnackbarOpen(false)
  }
  const closeModal = () => {
    setisModalOpen(false)
  }
  /*  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setCurrentUser(user)
      console.log(currentUser)
    } else {
      setCurrentUser(null)
      console.log(currentUser)
    }
  }) */
  const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(userAuth => {
        unsubscribe()
        resolve(userAuth)
      }, reject)
    })
  }

  const isUserAuth = async () => {
    const userAuth = await getCurrentUser()
    if (!userAuth) return
    setCurrentUser(userAuth)
  }

  const updateAccount = async name => {
    await setLoading(true)
    const userAuth = await getCurrentUser()
    await userAuth
      .updateProfile({
        displayName: name,
      })
      .then(() => {
        setLoading(false)
        setSnackbarMessage("Aktualizováno")
        setIsUserSnackbarOpen(true)
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  const fetchFavouriteItems = async () => {
    const userAuth = await getCurrentUser()
    if (!userAuth) {
      await setFavouriteItems([])
    } else {
      const favouriteItemsRef = await firebase
        .firestore()
        .collection("users")
        .doc(userAuth.uid)
      const snapShot = await favouriteItemsRef.get()
      if (!snapShot.exists) {
        await setFavouriteItems([])
      } else {
        try {
          await favouriteItemsRef.onSnapshot(doc => {
            const { favouriteItems } = doc.data()
            setFavouriteItems(favouriteItems)
          })
        } catch (error) {
          console.log(error)
          setError(error)
        }
      }
    }
    await console.log("fetch finish")
  }

  const addNewsletter = async email => {
    await setLoading(true)
    firebase
      .firestore()
      .collection("Newsletter")
      .doc(email)
      .set({
        email: email,
      })
      .then(() => {
        setLoading(false)
        setSnackbarMessage("Odesláno")
        setIsUserSnackbarOpen(true)
        console.log("Document successfully written!")
      })
      .catch(error => {
        setLoading(false)
        console.error("Error writing document: ", error)
      })
  }

  const addFavouriteItem = async itemId => {
    await setLoading(true)
    if (!currentUser) {
      await setisModalOpen(true)
      await setLoading(false)
    } else {
      const favouriteItemsRef = await firebase
        .firestore()
        .collection("users")
        .doc(currentUser.uid)
      const snapShot = await favouriteItemsRef.get()
      if (!snapShot.exists) {
        try {
          await favouriteItemsRef.set({
            favouriteItems: [itemId],
          })
        } catch (error) {
          console.log("error creating user", error.message)
        }
      } else {
        try {
          await console.log("write database")
          favouriteItemsRef.update({
            favouriteItems: firebase.firestore.FieldValue.arrayUnion(itemId),
          })
          await console.log("done database")
        } catch (error) {
          setError(error)
        }
      }
      await setLoading(false)
    }
  }

  const removeFavouriteItem = async itemId => {
    await setLoading(true)
    if (!currentUser) {
      console.log("prihlaste se")
      await setLoading(false)
    } else {
      const favouriteItemsRef = await firebase
        .firestore()
        .collection("users")
        .doc(currentUser.uid)
      try {
        await favouriteItemsRef.update({
          favouriteItems: firebase.firestore.FieldValue.arrayRemove(itemId),
        })
      } catch (error) {
        setError(error)
      }
    }
    await setLoading(false)
  }

  const signUp = async (email, password, name) => {
    try {
      await setError(null)
      await setLoading(true)
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
      await user
        .updateProfile({
          displayName: name,
        })
        .then(function () {
          console.log("update succes")
        })
        .catch(function (error) {
          setError(error)
        })
      await setCurrentUser(user)
      await createUserProfileDocument(user)
      setSnackbarMessage("Jste přihlášen")
      setIsUserSnackbarOpen(true)
      await setLoading(false)
    } catch (error) {
      setError(error)
      await setLoading(false)
    }
  }

  const signIn = async (email, password) => {
    await setError(null)
    await setLoading(true)
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user
        setCurrentUser(user)
        setSnackbarMessage("Jste přihlášen")
        setIsUserSnackbarOpen(true)
      })
      .catch(error => {
        setError(error)
      })
    await setLoading(false)
  }

  const logout = async () => {
    await setLoading(true)
    await new Promise(resolve => {
      firebase
        .auth()
        .signOut()
        .then(function () {
          setCurrentUser(null)
          setFavouriteItems([])
          setSnackbarMessage("Jste odhlášen")
          setIsUserSnackbarOpen(true)
          resolve()
        })
    })
    await setLoading(false)
  }

  const resetPassword = async email => {
    try {
      await setError("")
      await setLoading(true)
      await firebase.auth().sendPasswordResetEmail(email)
      await setLoading(false)
    } catch (error) {
      await setError(error)
      await setLoading(false)
    }
  }

  return (
    <UserContext.Provider
      value={{
        isModalOpen,
        snackbarMessage,
        favouriteItems,
        currentUser,
        loading,
        error,
        isUserSnackbarOpen,
        signUp,
        logout,
        resetPassword,
        signIn,
        fetchFavouriteItems,
        addFavouriteItem,
        removeFavouriteItem,
        isUserAuth,
        closeUserSnackbar,
        closeModal,
        addNewsletter,
        updateAccount,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
