import React, { useEffect, useState } from 'react'
import './Feed.css'
import {Avatar} from "@mui/material";
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Post from './Post';
import FeedIcons from './FeedIcons';

import db from '../firebase';

function Feed() {
    const [posts, setPosts] = useState("");
    const [input, setInput] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
        setPosts(
            snapshot.docs.map((doc =>({
                id: doc.id,
                data: doc.data()
            })))
        ))
    })
    const sendPost = (e) =>{
        e.preventDefault();
        db.collection('posts').add({
            name: 'Beenish',
            description: 'this is a test',
            // message:
        })
    }
  return (
    <div className="feed_container">
    <div className='feed'>
        <div className="input_container">
            <Avatar className='avatar' src='./dp.png'/>
            <form action="">
            <input value={input} type="text" placeholder='Start a post' />
            <button type="submit" onClick={sendPost}>Send</button> 
            </form>
        </div>
        <div className="feedIcons">
            <FeedIcons color="#1074fb" Icon={InsertPhotoOutlinedIcon} title='Photo'/>
            <FeedIcons color="#1bb563" Icon={SmartDisplayIcon} title='Video'/>
            <FeedIcons color="#d6900f" Icon={CalendarTodayIcon} title='Event'/>
            <FeedIcons color="#de7a68" Icon={NewspaperIcon} title='Write article'/>
        </div>
      
    </div>


    </div>
  )
}

export default Feed
