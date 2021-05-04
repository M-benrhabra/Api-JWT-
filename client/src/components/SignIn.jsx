import React, { useState } from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true

const SignIn = (props) => {
    const initialState = { email:'', password:''}
    const [infos, setInfos] = useState(initialState)
    const changeValue = (e) => {
        setInfos({
            ...infos,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await axios.post('http://localhost:4040/api/signIn', infos,  
        { withCredentials: true })
        // console.log(data);
        if(data) return  props.history.push('/')
    }
    return (
        <>
            <div className="card border-secondary container mt-5 " style={{width: "50%"}}>
                <div className="card-header ">
                    Sign Up 
                </div>
                <form className="row g-3" onSubmit={handleSubmit} >

                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Email</label>
                        <input type="text" name='email' className="form-control" id="inputAddress" onChange={changeValue} placeholder="email@gmail.com"  />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">Password</label>
                        <input type="text" name='password' className="form-control" id="inputAddress2" onChange={changeValue} placeholder="********" />
                    </div>
                    
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary mt-3 mb-5">Sign in</button>
                    </div>
                </form> 
            </div> 
        </>
    )
}

export default SignIn
