import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../../firebase_utils";

function PrivateRoutes(){
    const isAuth = auth.currentUser !== null;
 
    // useEffect(()=>{
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //           // User is signed in, see docs for a list of available properties
    //           // https://firebase.google.com/docs/reference/js/firebase.User
    //           const uid = user.uid;
    //           // ...
    //           console.log("uidddd", uid)
    //           setIsAuth(true);
    //         } else {
    //           // User is signed out
    //           // ...
    //           console.log("user is logged out")
    //         }
    //       });
         
    // }, [])

    if(!isAuth){
        return <Navigate to={'/'} />
    }

    return (
        <div>
            {/* Private Routes */}
            <Outlet />
        </div>
    );
}

export default PrivateRoutes;