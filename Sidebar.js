import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

function Sidebar() {
    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className='sidebar'>
            {/* sidebar top */}
            <div className='sidebar__top'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE5K6Vdl-GJI7KDHEmnF1cYB__G_Gv2QavDg&usqp=CAU' alt='' />
                <Avatar src={user.photoUrl} className='sidebar__avatar'>
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            {/* sidebar stats */}
            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>2846</p>
                </div>
                <div className='sidebar__stat'>
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>2109</p>
                </div>
            </div>
            {/* sidebar bottom */}
            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar
