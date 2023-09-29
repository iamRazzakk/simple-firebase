import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import App from '../../App';
import app from '../../Firebase/FireBase.init';


const Loging = () => {
    const [user, setUser] = useState({})
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const githubAuthProvider = new GithubAuthProvider()
    const handleSingin = () => {
        // console.log("Google mama is coming");
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser);
                setUser(loginUser)
            })
            .catch(error => {
                console.log("error", error.message);
            })
    }
    const handleSingOut = () => {
        signOut(auth)
            .then((result) => {
                setUser(null)
            })
            .catch(error => {
                console.log("Eroor");

            })
    }
    const handleGithubSingin = () => {
        signInWithPopup(auth, githubAuthProvider)
            .then(result => {
                const LoginUser = result.user
                setUser(LoginUser)
            })
            .catch(error =>{
                console.log(errorgit);
            })
    }
    return (
        <div>
            {user ?
                <button onClick={handleSingOut}>Sing Out</button> :
                <div>
                    <button onClick={handleSingin}>Google loging</button>
                    <button onClick={handleGithubSingin}>Github Loging</button>
                </div>
            }
            {user && <div>
                <h3>Name: {user?.displayName}</h3>
                <p>{user.email}</p>
                <img src={user?.photoURL} alt="" />
            </div>
            }
        </div>
    );
};

export default Loging;