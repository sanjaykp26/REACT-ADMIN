import React, { useContext } from 'react'
import "./navbar.scss"
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import { DarkModeContext } from '../../context/darkModeContext';
const Navbar = () => {
  const {dispatch}=useContext(DarkModeContext)
  return (
    <div className='navbar'>
        <div className='wrapper'>
        <div className='search'>
            <input type="" placeholder='Search...' />
            <SearchIcon/>
        </div>
        <div className='items'>
            <div className='item'>
              <LanguageIcon className='icon'/>
              English
            </div>
            <div className='item'>
              <DarkModeOutlinedIcon className='icon'onClick={()=>dispatch({type:"TOGGLE"})} />
              
            </div>
            <div className='item'>
              <FullscreenExitOutlinedIcon className='icon'/>
              
            </div>
            <div className='item'>
              <NotificationsNoneOutlinedIcon className='icon'/>
              <div className='couter'>1</div>
            </div>
            <div className='item'>
              <ChatBubbleOutlineOutlinedIcon className='icon'/>
              <div className='couter'>1</div>
            </div>  
            <div className='item'>
              <ListOutlinedIcon className='icon'/>
              
            </div>  
            <div className='item'>
              <img src='https://i.postimg.cc/bNbK4ky7/pexels-photo-1438081.jpg' alt='' className='avatar'></img>
              
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar