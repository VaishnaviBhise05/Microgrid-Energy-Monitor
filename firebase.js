import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB4noZiM_QWTQzoC7e_Zsf9HnkKrsD4CBc",          // Your Firebase Web API key
  authDomain: "microgridmonitor-52f9d.firebaseapp.com",       // From Firebase console
  databaseURL: "https://microgridmonitor-52f9d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "microgridmonitor-52f9d",
  storageBucket: "microgridmonitor-52f9d.appspot.com",
  messagingSenderId: "802040004536",                           // From Firebase console
  appId: "1:802040004536:android:1670ed97f358b584b0194d"      // Your App ID
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
