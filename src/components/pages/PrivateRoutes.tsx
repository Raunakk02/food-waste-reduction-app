import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes(){
    const [isAuth, setIsAuth] = useState(false);

    if(!isAuth){
        return <Navigate to={'/'} />
    }

    return (
        <div>
            Private Routes
            <Outlet />
        </div>
    );
}

export default PrivateRoutes;