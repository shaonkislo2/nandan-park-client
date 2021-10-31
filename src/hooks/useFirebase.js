import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../components/Login/Firebase/firebase.init';
import {getAuth,GoogleAuthProvider,signInWithPopup ,onAuthStateChanged , signOut} from "firebase/auth"

// initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] =useState({});
    const [isLoading, setIsLoading] =useState(true);


    const auth = getAuth();

    const signInUsingGoogle = () =>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        .finally(() => setIsLoading(false)); 
    }
    useEffect(() =>{
        const unSubscribed = onAuthStateChanged (auth, user =>{
            if (user){
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unSubscribed;
    },[])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() =>{})
        .finally(() => setIsLoading(false));
    }

    return {
        user, 
        isLoading,
        logOut,
        signInUsingGoogle
    }
};

export default useFirebase;
