// import React from 'react'
// import { Avatar } from '@mui/material'
// import "./Header.css";
// import { useSelector } from 'react-redux';
// import { selectUser } from './features/userslice';
// const Headeroption = ({Icon, title,avatar}) => {
//   const user = useSelector(selectUser)
//   return (
//  <>
//     <div className='header_option'>
//            {
//             Icon &&  <Icon></Icon>
//            } {
//             avatar && <Avatar name={avatar} 
//               src={user.photoURL}
//             />
//            }
            
//           <span>{title}</span>
//     </div>
//  </>
//   )
// }

// export default Headeroption
import React from 'react';
import { Avatar } from '@mui/material';
import './Header.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userslice';
import firebase from 'firebase/compat/app';
const Headeroption = ({ Icon, title, avatar }) => {
  const user = useSelector(selectUser);

  return (
    <>
      <div className="header_option">
        {Icon && <Icon />}
        {avatar && 
          <Avatar
            name={avatar}
            src={user.photoURL}
            onClick={e=>firebase.auth().signOut()} // Corrected property name
          />
        }
        <span>{title}</span>
      </div>
    </>
  );
};

export default Headeroption;
