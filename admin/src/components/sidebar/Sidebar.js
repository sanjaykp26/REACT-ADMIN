import React, { useContext } from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import LoginIcon from '@mui/icons-material/Login';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
const Sidebar = () => {
    const {dispatch}=useContext(DarkModeContext)
  return (
    <div className='sidebar'>
        <div className='top'>
            <Link to="/"><span className='logo'>Admin</span></Link>
        </div>
        <hr/>
        <div className='center'>
            <ul>
                <p className='title'>MAIN</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className='title'>LISTS</p>
                <Link to="/users">
                    <li><PersonOutlineIcon className='icon'/>
                        <span>Users</span>
                    </li>
                </Link>
                <Link to="/products">
                    <li>
                        <StoreIcon className='icon'/>
                        <span>Products</span>
                    </li>
                </Link>
                <li>
                    <CreditCardIcon className='icon'/>
                    <span>Orders</span>
                </li>
                <li><LocalShippingIcon className='icon'/>
                    <span>Delivery</span>
                </li>
                <p className='title'>USEFUL</p>
                <li><InsertChartIcon className='icon'/>
                    <span>stats</span>
                </li>
                <li>
                    <NotificationsNoneIcon className='icon' />
                    <span>Notifications</span>
                </li>
                <li>
                <SettingsSystemDaydreamIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <p className='title'>SERVICE</p>
                <li>
                <LoginIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                <SettingsApplicationsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <p className='title'>USER</p>
                <li>
                <AccountCircleIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppIcon className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className='bottom'>
            <div className='coloroptions' onClick={()=>dispatch({type:"LIGHT"})}></div>
            <div className='coloroptions'onClick={()=>dispatch({type:"DARK"})}></div>
            
        </div>
    </div>
  )
}

export default Sidebar