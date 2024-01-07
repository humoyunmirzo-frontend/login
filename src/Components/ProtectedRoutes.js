import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
const token = localStorage.getItem('access_token')
    return(
        token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes