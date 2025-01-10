import { Navigate, Outlet } from "react-router-dom"

interface ProtectedRouteProps{
    user:Boolean
    redirect?:string
}


export const ProtectedRoute = ({user,redirect='/login'}:ProtectedRouteProps)=>{
    console.log(user);
    

    return user ? <Outlet /> : <Navigate to={redirect} />
     
}