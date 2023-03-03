import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { logIn } from '../Redux/Action';
import './LoginPage.css'

export default function LoginPage() {
    const { ValidUser}  = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [user, setuser] = useState({
        username: '',
        password: '',
    });

    const validateUser = ValidUser.find((item) =>user.username===item.username && user.password===item.password  )
    console.log(  validateUser,"valisuser"  );

    const Inputchange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }

    const LoginSub = (e) => {
        e.preventDefault()
        if (validateUser) {
            dispatch(logIn())
            window.localStorage.setItem('login', JSON.stringify(  user  ))
            navigate('/oth')
        }
        else {
            setError('Invalid,Please check your username or password')
        }
    }

    return (
        <div  className='clr'>
            <form className='login_section'  onSubmit={(e) => LoginSub(e)} >
                <div className='pos_abs'>
                    <div className='head'>
                        <h2>KIOSK ADMIN LOGIN</h2>
                    </div>

                    <label>Username :  </label><br/>
                        <input
                            type="text"
                            name='username'
                            value={user.username}
                            onChange={(e) => Inputchange(e)}
                            required
                        /><br/>

                    <label >Password :</label><br/>
                        <input
                            type="password"
                            name='password'
                            value={user.password}
                            onChange={(e) => Inputchange(e)}
                            required
                        /><br/>
                    <div className='error'>
                   
                       <p>{error}</p>  
                        
                    </div>

                    <div className='buttons'>
                        <div className='s_btn'>
                            <button className='s_btn_btn' type='submit'>Login</button>
                        </div>

                        <div className='c_btn'>
                            <Link to='/allprd'><button className='c_btn_btn' type='submit'>Cancel</button></Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
