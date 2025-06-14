import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // This is to dispatch actions to the Redux store
  const user = useSelector(store => store.user);// Get the user data from the Redux store
  // console.log("USER: "+user)
  const showGptSearch = useSelector(store => store.gpt.showGptSearch); // Get the gptSearch value from the Redux store

  const handleSignOut = () => { 
    signOut(auth).then(() => {
      // Sign-out successful.
      // console.log("Sign out successful");
      // Redirect to the login page or perform any other action
      // window.location.href = '/'; // Redirect to the home page or login page
      // navigate('/'); // Alternatively, use navigate if you want to use react-router
    }).catch((error) => {
      // An error happened.
      console.error("Sign out error: ", error);
      navigate('/error'); // Redirect to an error page or handle the error appropriately
    });
  }
// This useEffect is used to check the authentication state of the user when the component mounts and redirect accordingly
  useEffect(() => { // we are using useEffect because we want to check the authentication state of the user when the component mounts
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) { // when user signs in or signs up
          const {uid, email, displayName, photoURL} = user;
            // Dispatch the user data to the Redux store
            dispatch(addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL
            }))
            navigate("/browse"); // Redirect to the browse page after sign in or sign up

        } else { // when User signs out
            dispatch(removeUser());
            navigate("/"); // Redirect to the login page after sign out
        }
    });
    return () => unsubscribe(); // Cleanup the subscription on component unmount
  }, [])
  
  const handleGptSearchClick = () => { 
    dispatch(toggleGptSearchView()) // Toggle the gptSearch view
  }

  const handleLanguageChange = (e) => { 
    const selectedLanguage = e.target.value;
    dispatch(changeLanguage(selectedLanguage)); // Dispatch the selected language to the Redux store
  }

  // console.log(`gptvalue: ${showGptSearch}`)
  return (
      <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center' style={{right: 0}}>
        <img className='w-25' src={LOGO_URL} alt="logo" />
        {
          user &&
        (<div className='flex items-center'>
          {
            showGptSearch && <select onChange={handleLanguageChange} name="language" className='mr-4 p-1 rounded-md bg-gray-900 text-white outline-none cursor-pointer'>
            {
                SUPPORTED_LANGUAGES.map((language) => 
                  <option key={language.identifier} value={language.identifier}>
                    {language.name}
                  </option>
                )
            }
            </select>
          }

            <button
              onClick={handleGptSearchClick}
              className='py-1 px-2 mr-4 bg-green-600 rounded-lg text-white cursor-pointer hover:opacity-70'>
              {showGptSearch ? "Homepage" : "Ask AI ✨"}
            </button>
            <img
                className='w-8 h-8 rounded-md hover:cursor-pointer hover:scale-110 transition duration-300'
                alt="usericon"
                src={user?.photoURL}
            />
            <p className='ml-2 text-white font-semibold'>{user?.displayName}</p>
            <button
              onClick={handleSignOut}
              className='ml-4 px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300 cursor-pointer'>
              {"Sign Out"}
            </button>
          </div>)
        }
      </div>
  )
}

export default Header