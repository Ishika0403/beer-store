import React from 'react';

function AnotherPage() {

  const handleClick = ()=>{
      if (window.confirm('Are you sure,want to LogOut')) {
            window.location.replace('/login')
        }
    }
  return (
    <div className='inner_container logout'>
        Login successfully!

      <button className='logout_btn' onClick={handleClick}>Logout</button>
    </div>
  )
}

export default AnotherPage
