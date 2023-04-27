import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user ,setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const createUser = (email , password) =>{
        return createUserWithEmailAndPassword(auth , email , password);
    };

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth , email ,password);
    };

    const signInGoogle =()=>{
        return signInWithPopup(auth,googleAuth);
    }
 
    const logOut =()=>{
        signOut(auth);
    };

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth , currentUser=>{
        setUser(currentUser);
        setLoading(false);
        });
        return ()=>{
            unSubscribe();
        };
    },[]);

    const authInfo ={
        signInGoogle,
        createUser,
        signIn,
        logOut,
        user,
        loading
    };
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;