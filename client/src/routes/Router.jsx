import React, { useContext } from 'react'
import {Route,  Switch } from 'react-router-dom'
import Header from '../components/layout/Header'
import Home from '../components/Home'
import DashboardAdmin from '../components/Dashboard'
import DashboardTechnic from '../components/DashboardTechnic'
import ProfileUser from '../components/ProfileUser'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import Logout from '../components/Logout'
import { AdminRoute, TechnicianRoute, UserRoute, IsAuthenticate } from './ProtectedRoutes'
import { UserContext } from '../contextApi/MyContext'


const Router = () => {

    const { infos:{isAuth , role}} = useContext(UserContext)
    console.table({isAuth , role});
    return (
        <div className="">
        <Header title = 'Api JWT'  />
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/logout' component={Logout} />
            <IsAuthenticate  path='/signUp' isAuth={isAuth} role={role} component={SignUp} />
            <IsAuthenticate  path='/signIn' isAuth={isAuth} role={role} component={SignIn} />
            <AdminRoute  path='/dashboard' isAuth={isAuth} role={role} component={DashboardAdmin} />
            <TechnicianRoute  path='/technician' isAuth={isAuth} role={role} component={DashboardTechnic} />
            <UserRoute  path='/profileUser' isAuth={isAuth} role={role} component={ProfileUser} />
          </Switch>
        </div>
      </div>
    )
}


// const AdminRoute = ({ component:Component, isAuth, role, ...rest}) =>(
//     <Route
//     {...rest}
//     render={() => ( 
//         (isAuth && role === 'admin')  
//         ? <Component/> : <Redirect to="/signIn" />  
//     )}
//     />
//     )
    
// const TechnicianRoute = ({component:Component,isAuth,role,...rest})=>(
//         <Route
//          {...rest}
//          render={() => ( 
//              (isAuth && role === 'technician' ) 
//              ? <Component/> : <Redirect to="/signIn" /> 
//         )}
//     />
// )

// const UserRoute = ({component:Component,isAuth,role,...rest})=>(
//         <Route
//          {...rest}
//         render={() => ( 
//              (isAuth && role === 'user' ) 
//              ? <Component/> : <Redirect to="/singIn" />  
//         )}
//     />
// )

// const IsAuthenticate = ({component:Component,role,isAuth,...rest})=>(
//     <Route
//      {...rest}
//      render={() => (
//         !isAuth ? <Component/> 
//                 : (role === "admin" 
//                   ? <Redirect to="/dashboard" />  
//                     : ( role === "technician"
//                      ? <Redirect to="/technician" /> 
//                      : <Redirect to="/profileUser" />)
//          )
    
//     )}
// />
// )
    
export default Router
