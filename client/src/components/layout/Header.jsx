import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { UserContext } from '../../contextApi/MyContext'


const Header = (props) => {
    const {title} = props
    const { infos:{isAuth , role}} = useContext(UserContext)

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py0">
            <div className="container">
                <Link to= '/' className= 'navbar-brand'> {title}</Link>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link"> Home </NavLink>
                        </li>
                        { !isAuth ? 
                            ( <>
                                <li className="nav-item">
                                    <Link to="/signUp" className="nav-link"> Sign Up </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/signIn" className="nav-link"> Sign In </Link>
                                </li>
                            </>) :
                            (
                                <>  
                                    <li className="nav-item">
                                    <Link to="/logout" className="nav-link"> Logout </Link>
                                    </li> 
                                </>
                            ) 
                        }
                       
                       
                    </ul>
                </div>
            </div>
        </nav>  
    )
}

export default Header
