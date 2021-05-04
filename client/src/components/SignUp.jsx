import React, { useState, useContext } from 'react'
import { UserContext } from '../contextApi/MyContext'
import axios from 'axios'
axios.defaults.withCredentials = true

const SignUp = (props) => {
    const { infos:{isAuth , role},setInfos} = useContext(UserContext)

    const initialState = { first_name:'', last_name:'', email:'', password:'', role: 'user'}
    const [infosUser, setInfosUser] = useState(initialState)
    const changeValue = (e) => {
        setInfosUser({
            ...infosUser,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = await axios.post('http://localhost:4040/api/signUp', infosUser,
        { withCredentials: true })
        // console.log(data);
        if(data){
            console.log(data, "register");
            setInfos(data.data)
        }
    }

    return (
        <>
            <div className="card border-secondary container mt-5 " style={{width: "50%"}}>
                <div className="card-header ">
                    Sign Up 
                </div>
                
                {/* <div class="alert alert-success" role="alert">
                    
                </div> */}
                
                <form className="row g-3" onSubmit={handleSubmit} >
                    <div className="col-md-6 mt-3 ">
                        <label htmlFor="name" className="form-label">First Name</label>
                        <input type="text"  className="form-control" id="name" name='first_name' onChange={changeValue} placeholder="First Name"  />
                    </div>
                    <div className="col-md-6 mt-3 ">
                        <label htmlFor="input4" className="form-label">Last Name</label>
                        <input type="text"  className="form-control" id="input4" name='last_name' onChange={changeValue}  placeholder="Last Name" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputemail" className="form-label">Email</label>
                        <input type="email"  className="form-control" id="inputemail" name='email' onChange={changeValue} placeholder="email@gmail.com"  />
                    </div>
                    <div className="col-12">
                        <label htmlFor="input2" className="form-label">Password</label>
                        <input type="text"  className="form-control" id="input2" name='password' onChange={changeValue} placeholder="********"  />
                    </div>
                    <div className="col-12">
                        <select name='role' className="browser-default custom-select mt-3" onChange={changeValue} >
                            <option disabled selected>Select Your Role</option>
                            <option  defaultValue="user">user</option>
                            <option  defaultValue="technician">technician</option>
                        </select>
                    </div>
                    
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary mt-3 mb-5">Sign in</button>
                    </div>
                </form> 
            </div> 
        </>
    )
}

export default SignUp
