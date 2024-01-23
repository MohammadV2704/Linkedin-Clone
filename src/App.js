// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import Feed from './Feed';
// import Visit from './Visit';
// import Login from './Login';
// import { loginuser, selectUser } from './features/userslice';
// import { auth } from './firebasse';

// const App = () => {
//   const user = useSelector(selectUser); // Assuming you have a Redux store with a 'user' state
//   const dispatch = useDispatch();
//   useEffect(()=>{
//      auth.onAuthStateChanged((userAuth)=>{
//          if(userAuth){
//           loginuser({
//             email: userAuth.email,
//             uid: userAuth.uid,
//             photoURL: userAuth.PhotoUrl,
//             displayName: userAuth.displayName
//           })
//          }
//          else{
//             dispatch(loginuser())
//          }
//      })
//   },[])
//   return (
//     <>
//        {!user ? (
//         <Login />
//        ) : ( 
//         <div className='app_wrapper'>
//           <Header />
//           <div className='app_body'>
//             <Sidebar />
//             <Feed />
//             <Visit />

//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default App;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Visit from './Visit';
import Login from './Login';
import { loginuser, selectUser } from './features/userslice';
import { auth } from './firebasse';

const App = () => {
  const user = useSelector(selectUser); // Assuming you have a Redux store with a 'user' state
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          loginuser({
            email: userAuth.email,
            uid: userAuth.uid,
            photoURL: userAuth.photoURL,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(loginuser());
      }
    });
  }, []);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className='app_wrapper'>
          <Header />
          <div className='app_body'>
            <Sidebar />
            <Feed />
            <Visit />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
