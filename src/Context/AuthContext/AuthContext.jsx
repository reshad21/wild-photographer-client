import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from './../../Firebase/firebase.config';

export const userContext = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
    const [user, setUser] = useState('');
    const [loader, setLoader] = useState(true);

    // create user with email and password
    const signUpUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // create user with extra infromation
    const updateUserInfo = (name, photo) => {
        setLoader(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }
    // login user with email and password
    const logInuser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google signin
    const googleSignIn = (googleProvider) => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider)
    }

    // monitoring user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoader(false);
        });

        return () => {
            return unsubscribe();
        }
    }, [])


    // logout user 
    const logOutUser = () => {
        return signOut(auth);
    }

    const authInfo = { user, loader, signUpUser, updateUserInfo, logInuser, logOutUser, setLoader, googleSignIn };
    return (
        <div>
            <userContext.Provider value={authInfo}>
                {children}
            </userContext.Provider>
        </div>
    );
};

export default AuthContext;