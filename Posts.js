import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Posts.css'
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const  Posts = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div ref={ref} className='post'>
            <div className='post__header'>
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className='post__info'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className='post__body'>
                <p>{message}</p>
            </div>
            <div className='post__buttons'>
                <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray' />
                <InputOption Icon={ChatBubbleOutlineOutlinedIcon} title='Comment' color='gray' />
                <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray' />
                <InputOption Icon={SendOutlinedIcon} title='Send' color='gray' />
            </div>
        </div>
    )
})

export default Posts
