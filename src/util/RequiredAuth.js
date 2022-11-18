import { useContext } from "react"
import { authContext } from "../store/context"
import { Navigate } from "react-router-dom"


const RequireAuth = ({children}) => {
    const {auth } = useContext(authContext);
    if(!auth.token || !auth.userId) {
        return <Navigate to="/"/>
    }

    return children;
}

export default RequireAuth;