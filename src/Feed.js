import React, { useState } from 'react'
import './Feed.css'
import InputOption from './InputOption'
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from "@mui/icons-material/Subscriptions"
import EventNoteIcon from "@mui/icons-material/EventNote"
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay"
import Post from './Post'

function Feed() {
    const [posts, setPosts] = useState([]);

    const sendPost =e=>{
        e.preventDefault();

        setPosts()
    }
  return (
    <div className='feed'>
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon />
                <form>
                    <input type="text" />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className="feed_inputOptions">
                <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9"/>
                <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E"/>
                <InputOption Icon={EventNoteIcon} title='Event' color="#C0CBCD"/>
                <InputOption Icon={CalendarViewDayIcon} title='Write article' color="#7FC15E"/>
            </div>
        </div>
        <Post 
                name="David Adisa"
                description={"Software Engineer"} 
                message=
                {"We are building the linkedin clone and we are jamming to the music playing in background of the youtube video. We are building the linkedin clone and we are jamming to the music playing in background of the youtube video"}
                />

        {
            posts.map((post)=>(
                <Post />
            ))
        }
        

        
    </div>
  )
}

export default Feed
