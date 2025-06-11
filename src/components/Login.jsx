import React, {useState, useRef} from 'react'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import Header from './Header';
import { BACKGROUND_IMAGE_URL, PHOTO_URL } from '../utils/constants';

const Login = () => {
  const dispatch = useDispatch(); // This is to dispatch actions to the Redux store
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  const name = useRef(null); // This is used for the sign up form to get the user's name
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    // console.log(`auth: ${auth}`);
    // Validate the email and password
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    // Proceed with the sign in or sign up process if validation is successful
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

            // Here you can also set the display name
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: PHOTO_URL
            }).then(() => {
              // Profile updated!
              const {uid, email, displayName, photoURL} = auth.currentUser
              dispatch(addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL
              }))
            }).catch((error) => {
              // An error occurred
              setErrorMessage(error.code, "-", error.message);
            });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, "-", errorMessage);
      });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // console.log("Logged in: ", user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode, "-", errorMessage);
      });
    }
  }

  const toggleSignInForm = () => { 
    // This function should toggle between the sign in form and the sign up form
    // The sign in form should be displayed by default
    // The sign up form should be displayed when the "New to Netflix? Sign Up Now" text is clicked
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={BACKGROUND_IMAGE_URL} alt="background" />
        
      </div>

      {/* Sign in Form */}
      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black/80 my-40 mx-auto right-8 left-8 text-white rounded-lg flex flex-col items-center'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {isSignInForm ? null : <input ref={name} className="p-4 m-4 w-full dark:bg-gray-900 rounded" type="text" placeholder='Name'/>}
        <input ref={email} className="p-4 m-4 w-full dark:bg-gray-900 rounded" type="text" placeholder='Email address'/>
        <input ref={password} className="p-4 m-4 w-full dark:bg-gray-900 rounded" type="password" placeholder='Password' />
        {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
        <button className='p-4 m-6 w-full bg-red-700 rounded cursor-pointer' onClick={handleSubmit}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already a user? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login