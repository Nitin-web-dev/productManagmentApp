 import { useState, useEffect, Children } from "react";
 import { Outlet, Navigate } from "react-router-dom";
 export default function ProtectedRoute(){
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    useEffect(()=>{
        // todo: change protected route api to backend api to check authentication
        const verifyUser = async ()=>{
            try {
                setIsAuthenticated(true)
            } catch (error) {
                setIsAuthenticated(false);
            }finally{
                setIsLoading(false)
            }
        }
        verifyUser();
    },[])


    if(isLoading){
        return <div>loading...</div>;
    }
    return isAuthenticated? <Outlet/> : <Navigate to='/login' replace/>
 }