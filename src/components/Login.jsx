import React, {useState, useRef} from 'react'
import { checkValidData } from '../utils/validate';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    // Validate the email and password
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    // Proceed with the sign in or sign up process if validation is successful
    
  }

  const toggleSignInForm = () => { 
    // This function should toggle between the sign in form and the sign up form
    // The sign in form should be displayed by default
    // The sign up form should be displayed when the "New to Netflix? Sign Up Now" text is clicked
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web_tall_panel/CA-en-20250303-TRIFECTA-perspective_0b9144c0-5e9d-47f4-b388-9e147be89ba5_large.jpg" alt="background" />
        
      </div>

      {/* Sign in Form */}
      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black/80 my-40 mx-auto right-8 left-8 text-white rounded-lg flex flex-col items-center'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {isSignInForm ? null : <input className="p-4 m-4 w-full dark:bg-gray-900 rounded" type="text" placeholder='Name'/>}
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