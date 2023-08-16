import React from 'react'
import {Avatar} from '@material-ui/core'
import './Post.css'
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import RepeatIcon from '@mui/icons-material/Repeat';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'

function Post({name, description, message, photoUrl}) {

  return (
    <div className='post'>
        <div className="post_header">
            <Avatar></Avatar>
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post_body">
            <p>{message}</p>
        </div>
        <div className="post_buttons">
            <InputOption 
            Icon={ThumbUpAltOutlinedIcon} 
            title={"like"} 
            color={"gray"} 
            />
            <InputOption 
            Icon={ChatOutlinedIcon} 
            title={"Comment"} 
            color={"gray"} 
            />
            <InputOption 
            Icon={RepeatIcon} 
            title={"Repost"} 
            color={"gray"} 
            />
            <InputOption 
            Icon={SendOutlinedIcon} 
            title={"Send"} 
            color={"gray"} 
            />
        </div>
    </div>
  )
}

export default Post
