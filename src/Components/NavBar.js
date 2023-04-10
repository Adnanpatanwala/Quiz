import React from 'react'
import { useGlobalContext } from '../Context';

const NavBar = () => {
  const {setting,user,waiting,toggle,theme} = useGlobalContext();
  return ( 
    <nav className='nav'>
        <div className="header">
            <h1 className='heading-nav'>QuizBuzzer</h1>
        </div>
        <div className="right">

        <div className="dark">
            <button onClick={()=>toggle()} className='toggle'>{theme=='light'?'light':'dark'}</button>
        </div>
        {  !waiting?
        <div className="user">
          <h5>Welcome, {setting.name}</h5>
        </div> :null
        }
        </div>
    </nav>
  )
}

export default NavBar