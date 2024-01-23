import React, { forwardRef } from 'react'
import { Avatar } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import './post.css'
const Post = forwardRef(({name,descripation,message,PhotoUrl},ref) => {
    return (
        <>
            <div className='posts' ref={ref}>
                <div className='post_header'>
                    <div className='headerleft'>
                        <Avatar src={PhotoUrl}/>
                        <div className='post_profile_details'>
                            <h3>{name}</h3>
                            <p>{descripation}</p>
                        </div>
                    </div>
                    <MoreVertIcon />
                </div>
                <div className='posts_body'>
                    <p>{message}</p>
                </div>

                <div className='post_footer'>
                    <div className='post_footer_option'>
                           <ThumbUpIcon/>
                           <span>Like</span>
                    </div>
                    <div className='post_footer_option'>
                           <InsertCommentIcon/>
                           <span>Comment</span>
                    </div>
                    <div className='post_footer_option'>
                           <ShareIcon/>
                           <span>Share</span>
                    </div>
                    <div className='post_footer_option'>
                           <SendIcon/>
                           <span>Share</span>
                    </div>
                </div>
            </div>
        </>
    )
})
    


export default Post
