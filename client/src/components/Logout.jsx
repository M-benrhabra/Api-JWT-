import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const Logout = () => {

    useEffect(() => {
        axios.get('http://localhost:4040/api/logout')
        .then((response) => console.log(response))
    }, [])
    
    return (
        <>
            <Redirect to="/" />
        </>
    )
}

export default Logout
