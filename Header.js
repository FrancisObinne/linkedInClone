import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChartIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from './features/userSlice'
import { auth } from './firebase'

function Header() {
    const dispatch = useDispatch()

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }

    return (
        <div className='header'>
            <div className='header__left'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' alt='' />
                <div className='header__search'>
                    <SearchIcon />
                    <input placeholder='Search' type='text' />
                </div>
            </div>
            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='jobs' />
                <HeaderOption Icon={ChartIcon} title='messaging' />
                <HeaderOption Icon={NotificationsIcon} title='notifications' />
                <HeaderOption avatar={true} title='Francis Obinne' onClick={logoutOfApp} />
            </div>
        </div>
    )
}

export default Header