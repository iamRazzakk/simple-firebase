import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import App from '../../App';
import app from '../../Firebase/FireBase.init';


const Loging = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const handleSingin = () => {
        // console.log("Google mama is coming");
        signInWithPopup(auth, provider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log("error", error.message);
        })
    }
    return (
        <div>
            <button onClick={handleSingin}>Google loging</button>
        </div>
    );
};

export default Loging;