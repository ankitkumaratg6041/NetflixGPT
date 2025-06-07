import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);// Get the user data from the Redux store
  console.log("USER: "+user)

  const handleSignOut = () => { 
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Sign out successful");
      // Redirect to the login page or perform any other action
      // window.location.href = '/'; // Redirect to the home page or login page
      navigate('/'); // Alternatively, use navigate if you want to use react-router
    }).catch((error) => {
      // An error happened.
      console.error("Sign out error: ", error);
      navigate('/error'); // Redirect to an error page or handle the error appropriately
    });
  }

  return (
      <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center'>
        <img className='w-50' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7b21-92dd-d4d4b93ad8a6/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
        
      {user &&
        (<div className='flex items-center'>
          <img
            className='w-10 h-10 rounded-md hover:cursor-pointer hover:scale-110 transition duration-300'
            alt="usericon"
            src={user?.photoURL}
          />
          <p className='ml-2 text-white font-semibold'>{user?.displayName}</p>
          <button
            onClick={handleSignOut}
            className='ml-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300 cursor-pointer'>
            {"Sign Out"}
          </button>
        </div>)
      }
      </div>
  )
}

export default Header