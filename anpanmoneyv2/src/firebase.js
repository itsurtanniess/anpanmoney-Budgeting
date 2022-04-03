import firebase from "firebase/compat/app"
import  "firebase/compat/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCpgsjZ8EuVpVod4_s8nOjet2TyB1hEmiE",
  authDomain: "anpanmoney-cf5d0.firebaseapp.com",
  databaseURL: "https://anpanmoney-cf5d0-default-rtdb.firebaseio.com",
  projectId: "anpanmoney-cf5d0",
  storageBucket: "anpanmoney-cf5d0.appspot.com",
  messagingSenderId: "28971312083",
  appId: "1:28971312083:web:22ba4e81022e45f69ac526"
})

export const auth= app.auth()
export default app