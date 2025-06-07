import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {
    const dispatch = useDispatch(); // This is to dispatch actions to the Redux store

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
    ])

    useEffect(() => { // we are using useEffect because we want to check the authentication state of the user when the component mounts
        onAuthStateChanged(auth, (user) => {
            if (user) { // when user signs in or signs up
              const {uid, email, displayName, photoURL} = user;
                // Dispatch the user data to the Redux store
                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL
                }))

            } else { // when User signs out
                dispatch(removeUser());
            }
          });
    }, [])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body