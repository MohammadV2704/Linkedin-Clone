
import React, { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AssignmentIcon from '@mui/icons-material/Assignment';
import './Feed.css';
import Post from './Post';
import firebase from 'firebase/compat/app';
import { db } from './firebasse';
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { selectUser } from './features/userslice'
import FlipMove from 'react-flip-move'
const Feed = () => {

  const user = useSelector(selectUser);

  const [input, setInput] = useState('');
  const [posts, setPost] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // Check if user is logged in
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is logged in
        setCurrentUser(authUser);
      } else {
        // User is logged out
        setCurrentUser(null);
      }
    });

    return () => {
      // Clean up the listener
      unsubscribe();
    };
  }, []);

  const submitPost = (e) => {
    e.preventDefault();

    // Check if user is logged in before submitting the post
    if (currentUser) {
      db.collection('posts')
        .add({
          name: user.displayName,
          description: 'This is a test description',
          message: input,
          PhotoUrl: user.photoURL,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          setInput('');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // User is not logged in, handle the error
      console.log('User is not logged in.');
      // You can display an error message to the user or redirect them to the login page
    }
  };

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <>
      <div className="feed">
        <div className="feed_input">
          <div className="feed_form">
            <Avatar src={user.photoURL} />
            <form onSubmit={submitPost}>
              <input
                type="text"
                placeholder="Start a Post"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <input type="submit" />
            </form>
          </div>

          <div className="feed_option">
            <div className="option">
              <InsertPhotoIcon style={{ color: '#70b5f9' }} />
              <span>Photo</span>
            </div>
            <div className="option">
              <YouTubeIcon style={{ color: '#7fc15e' }} />
              <span>Video</span>
            </div>
            <div className="option">
              <CalendarMonthIcon style={{ color: '#e7a33e' }} />
              <span>Event</span>
            </div>
            <div className="option">
              <AssignmentIcon style={{ color: '#fc9295' }} />
              <span>Write Article</span>
            </div>
          </div>
        </div>

        <FlipMove>
        {posts.map(({ id, data }) => (
          <Post
            key={id}
            name={data.name}
            description={data.description}
            message={data.message}
            PhotoUrl={data.PhotoUrl}
          />
        ))}
        </FlipMove>
      </div>
    </>
  );
};

export default Feed;
// import React, { useEffect, useState } from 'react';
// import { Avatar } from '@mui/material';
// import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import './Feed.css';
// import Post from './Post';
// import firebase from 'firebase/compat/app';
// import { db } from './firebasse';
// import { useSelector } from 'react-redux/es/hooks/useSelector'
// import { selectUser } from './features/userslice'
// import FlipMove from 'react-flip-move'
// const Feed = () => {
//   const user = useSelector(selectUser);
//   const [input, setInput] = useState('');
//   const [posts, setPosts] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
//       if (authUser) {
//         setCurrentUser(authUser);
//       } else {
//         setCurrentUser(null);
//       }
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   const submitPost = (e) => {
//     e.preventDefault();

//     if (currentUser) {
//       db.collection('posts')
//         .add({
//           name: user.displayName,
//           description: 'This is a test description',
//           message: input,
//           photoUrl: user.photoURL,
//           timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//         })
//         .then(() => {
//           setInput('');
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     } else {
//       console.log('User is not logged in.');
//       // Handle the error, display an error message, or redirect to the login page
//     }
//   };

//   useEffect(() => {
//     const unsubscribe = db
//       .collection('posts')
//       .orderBy('timestamp', 'desc')
//       .onSnapshot((snapshot) => {
//         setPosts(
//           snapshot.docs.map((doc) => ({
//             id: doc.id,
//             data: doc.data(),
//           }))
//         );
//       });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
//     <div className="feed">
//       <div className="feed_input">
//         <div className="feed_form">
//           <Avatar src={user?.photoURL} />
//           <form onSubmit={submitPost}>
//             <input
//               type="text"
//               placeholder="Start a Post"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//             />
//             <button type="submit">Submit</button>
//           </form>
//         </div>

//         <div className="feed_option">
//           <div className="option">
//             <InsertPhotoIcon style={{ color: '#70b5f9' }} />
//             <span>Photo</span>
//           </div>
//           <div className="option">
//             <YouTubeIcon style={{ color: '#7fc15e' }} />
//             <span>Video</span>
//           </div>
//           <div className="option">
//             <CalendarMonthIcon style={{ color: '#e7a33e' }} />
//             <span>Event</span>
//           </div>
//           <div className="option">
//             <AssignmentIcon style={{ color: '#fc9295' }} />
//             <span>Write Article</span>
//           </div>
//         </div>
//       </div>

//       {posts.length > 0 && (
//         <FlipMove>
//           {posts.map(({ id, data }) => (
//             <Post
//               key={id}
//               name={data.name}
//               description={data.description}
//               message={data.message}
//               photoUrl={data.photoUrl}
//             />
//           ))}
//         </FlipMove>
//       )}
//     </div>
//   );
// };

// export default Feed;
