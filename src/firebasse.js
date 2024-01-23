
import firebasse from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCEANgf42IcrGwXceIZXvxSwRC478LDK2w",
    authDomain: "linkedin-clone-e016b.firebaseapp.com",
    projectId: "linkedin-clone-e016b",
    storageBucket: "linkedin-clone-e016b.appspot.com",
    messagingSenderId: "139173582740",
    appId: "1:139173582740:web:22e0a25408bc98d98a2181",
    measurementId: "G-N8KB5ZCJZW"
  };
//   This Special Line of code here Connects everything.
  const firebaseApp = firebasse.initializeApp(firebaseConfig);
//   gets the firebasestore database();
const db = firebaseApp.firestore();
// we want to use firbase authenatication
const auth = firebasse.auth();
export { db,auth }