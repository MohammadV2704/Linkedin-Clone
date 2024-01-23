import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./Header.css";
import Headeroption from './Headeroption';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userslice';
const Header = () => {

    const  user= useSelector(selectUser);

    return (
        <>
            <div className='header'>
                <div className='header_left'>
                     <div className='header_logo'>
                        <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"/>
                     </div>
                     <div className='header_search'>
                      <SearchIcon/>
                      <input type='text' placeholder='Search'/>
                     </div>
                </div>
                <div className='header_right'>
                    <Headeroption
                    Icon ={HomeIcon}
                    title = "Home"
                    />
                    <Headeroption
                    Icon ={PeopleAltIcon}
                    title = "Mynetwok"
                    />
                    <Headeroption
                    Icon ={BusinessCenterIcon}
                    title = "Jobs"
                    />
                    <Headeroption
                    Icon ={MessageIcon}
                    title = "Messaging"
                    />
                    <Headeroption
                    Icon ={ NotificationsIcon}
                    title = "Notification"
                    />
                      <Headeroption
                    avatar ={ Avatar}
                    title = {user.displayName}
                    />
                  
                </div>
            </div>
        </>
    )
}

export default Header
// import React from 'react';
// import SearchIcon from '@mui/icons-material/Search';
// import HomeIcon from '@mui/icons-material/Home';
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
// import MessageIcon from '@mui/icons-material/Message';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import "./Header.css";
// import Headeroption from './Headeroption';
// import { Avatar } from '@mui/material';
// import { useSelector } from 'react-redux';
// import { selectUser } from './features/userslice';

// const Header = () => {
//     const user = useSelector(selectUser);

//     return (
//         <div className='header'>
//             <div className='header_left'>
//                 <div className='header_logo'>
//                     <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="Logo" />
//                 </div>
//                 <div className='header_search'>
//                     <SearchIcon/>
//                     <input type='text' placeholder='Search'/>
//                 </div>
//             </div>
//             <div className='header_right'>
//                 <Headeroption
//                     Icon={HomeIcon}
//                     title="Home"
//                 />
//                 <Headeroption
//                     Icon={PeopleAltIcon}
//                     title="Mynetwok"
//                 />
//                 <Headeroption
//                     Icon={BusinessCenterIcon}
//                     title="Jobs"
//                 />
//                 <Headeroption
//                     Icon={MessageIcon}
//                     title="Messaging"
//                 />
//                 <Headeroption
//                     Icon={NotificationsIcon}
//                     title="Notification"
//                 />
//                 <Headeroption
//                     avatar={Avatar}
//                     title={user?.displayName} {/* Assuming displayName is available in user */}
//                     photoUrl={user?.photoUrl} {/* Assuming photoUrl is available in user */}
//                 />
//             </div>
//         </div>
//     );
// };

// export default Header;
