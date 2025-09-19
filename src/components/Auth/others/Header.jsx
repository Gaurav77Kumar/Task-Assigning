import React from 'react'

const Header = ({ data, onLogout }) => { // Receive onlogout as prop
  // compute username directly instead of using state
  const username = data ? data.firstName : "Admin"; // Default to admin if no data


  const logOutUser = () => {
    localStorage.setItem("loggedInUser", null); // clear logged in user info
    window.location.reload(); // reload the app to reset state in App.jsx
  }

  return (
    <div className='flex items-end justify-between text-white'>
      <h1 className='text-2xl font-medium'>
        Hello <br /> 
        <span className='text-3xl font-semibold'>{username}</span>
      </h1>
      
      <button
        onClick={logOutUser} //  trigger logout from parent
        className='bg-red-600 text-lg font-medium text-white px-3 py-2 rounded-sm'
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
