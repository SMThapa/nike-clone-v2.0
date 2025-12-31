import { useState } from 'react'
import { useTitle } from '../../hooks/useTitle'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react';
import logo from '../../assets/images/logo.png';

import axios from 'axios';
import useUserStore from '../../zustand/useUserStore';
import { toast } from 'react-toastify';

export const Login = () => {
    useTitle('Login - NiKE')

    const url = import.meta.env.VITE_BASE_URL

    const [showPassword, setShowPassword] = useState(false);
    const registerUser = useUserStore(state => state.setUser)

    const [error, setError] = useState({
        email: '',
        password: '',
    })

    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        console.log(email, password)
        axios.post(`${url}/users/login`, {
            email, password
        }).then(res => {
            // console.log(res.data.user)

            registerUser({
                ...res.data.user
            })
            navigate('/')
            toast.success('Loggin Successful.')
        }).catch(err => {
            console.log(err)
            setError(prev => ({
                ...prev,
                ...err.response.data
            }))
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.elements.email.value
        const password = e.target.elements.password.value

        handleLogin(email, password)
    }


    return (
        <div className="login container">

            <div className="contents">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="slogan">your account for <br /> everything nike</div>

                <form onSubmit={(e) => handleSubmit(e)} autoComplete='on'>

                    <div className="form-group">
                        <input type="email" name='email' id='email' autoComplete='username' placeholder='Email Address' />
                    </div>

                    <div className="form-group">
                        <input type={showPassword ? 'text' : 'password'} name='password' id='password' autoComplete='current-password' placeholder='Password' />

                        <div className="view-password" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ?
                                    <Eye /> :
                                    <EyeOff />
                            }
                        </div>
                    </div>
                    <div className="form-action-items">
                        <div className="action-group">
                            <input type="checkbox" id='check-box' />
                            <label htmlFor="check-box">Keep me signed in</label>
                        </div>
                        <Link>Forgot your password?</Link>
                    </div>

                    <p>By logging in, you agree to Nike's <Link>Privacy Policy</Link> <br />and <Link>Terms of Use</Link></p>
                    <button className='btn-primary' type='submit'>SiGN IN</button>

                    <p>Not a Member? <Link to={'/register'}>Join Us</Link></p>
                </form>
            </div>

        </div>
    )
}
