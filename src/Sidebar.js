import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { selectUser } from './features/userslice'
const Sidebar = () => {
    
    const user = useSelector(selectUser);
  return (
    <>
    <div className='sidebar'>
        <div className='sidebar_profile'>
            <img src='https://picfiles.alphacoders.com/319/319702.jpg'/>

            <div className='profile_details'>
                  <Avatar
                    src={user.photoURL}
                  />
                <h4>{user.displayName}</h4>
                <p>Web Developer</p>
            </div>

            <div className='profile_stats'>
                <span>Who Viewed Your Profile</span>
                <span className='stats'>26</span>
            </div>
            <div className='profile_stats'>
                <span>Connection<br/><b>Grow Your Netwok</b></span>
                <span className='stats'>300</span>
            </div>
        </div>

        <div className='sidebar_recent'>
            <p>Recent</p>
            <p className='hash'><span>#</span>Hardhat</p>
            <p className='hash'><span>#</span>Solidity</p>
            <p className='hash'><span>#</span>Webdevelopment</p>
            <p className='hash'><span>#</span>React.js</p>
            <p className='hash'><span>#</span>Reduxtoolkit</p>
            <p className='hash'><span>#</span>Programing</p>
        </div>
    </div>
  </>
)
}
  

export default Sidebar
