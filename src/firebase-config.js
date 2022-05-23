import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAsVnKi0VL7-anRdwRh2-on_uiCFkLHis8",
    authDomain: "fir-react-7ddc9.firebaseapp.com",
    projectId: "fir-react-7ddc9",
    storageBucket: "fir-react-7ddc9.appspot.com",
    messagingSenderId: "569814557439",
    appId: "1:569814557439:web:8afbfe62c8ef6df7a762ca"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app);