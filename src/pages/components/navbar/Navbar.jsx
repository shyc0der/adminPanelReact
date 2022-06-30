import React from 'react';
import "./navbar.scss"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined"

const Navbar = () => {
  return (
    <div className='navBar'>
      <div className='wrapper'>
        <div className='search'>
          <input type="text" placeholder='Search...'/>
          <SearchOutlinedIcon className='icon'/>
        </div>
      </div>
      <div className='items'>
        <div className='item'>
          <LanguageOutlinedIcon className='icon'/>
          English
        </div>
        <div className='item'>
          <img 
          className='avatar'
          src='https://c8.alamy.com/comp/T0AY2P/ethnic-seamless-pattern-with-african-print-vector-illustration-bright-color-T0AY2P.jpg'
          alt=""
          />          
        </div>
      </div>
      
    </div>
  );
}

export default Navbar;
