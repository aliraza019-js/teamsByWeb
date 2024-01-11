const { initializeApp } = require('firebase/app');
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyBosDrXWEmne-It-JsYn5TfrqDgq2vBmxU",
  authDomain: "teamstage-dev.firebaseapp.com",
  projectId: "teamstage-dev",
  storageBucket: "teamstage-dev.appspot.com",
  messagingSenderId: "1074253651684",
  appId: "1:1074253651684:web:2247589de48557762c96f1",
  measurementId: "G-MBMW935BYG"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function getToken() {
  try {
    // let res = await signInWithEmailAndPassword(auth, 'sebpaus@freenet.de', 'sep1sep@')
    // let res = await signInWithEmailAndPassword(auth, 'spaus@team-stage.com', 'sep1sep@')
    let res = await signInWithEmailAndPassword(auth, 'spaus@ptnc.de', 'sep1sep@')
    console.log(res.user.accessToken)
    // console.log(auth.currentUser.uid)
  } catch (err) {
    console.error(err)
  }
}
getToken()