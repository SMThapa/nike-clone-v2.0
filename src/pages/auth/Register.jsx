import { useTitle } from '../../hooks/useTitle'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import axios from 'axios'

import { Eye, EyeOff } from 'lucide-react';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import useUserStore from '../../zustand/useUserStore';

export const Register = () => {

    useTitle('Register - NiKE')

    const url = import.meta.env.VITE_BASE_URL

    const navigate = useNavigate();
    const registerUser = useUserStore(state => state.setUser)

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

    const confirmPasswordRef = useRef(null);

    const [error, setError] = useState({
        email: '',
        password: '',
        confirm_password: ''
    })

    const handleRegister = (email, password) => {
        console.log(email, password)
        axios.post(`${url}/users/register`, {
            email, password
        }).then(res => {
            registerUser({
                ...res.data.user
            })
            navigate('/')
            toast.success('Registration Complete.')
        }).catch(err => {
            console.log(err.response.data)
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

        //compare password
        if (confirmPasswordRef.current.value == password) {
            handleRegister(email, password)
        } else {
            setError(prev => ({
                ...prev,
                confirm_password: "Password didn't match"
            }));
        }

    }

    return (
        <div className="register container">

            <div className="contents">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="slogan">your account for <br /> everything nike</div>

                <form onSubmit={(e) => handleSubmit(e)}>

                    <div className="form-group">
                        <input
                            type="email"
                            name='email' id='email'
                            placeholder='Email Address'
                            autoComplete='off'
                            required
                            className={error.email && 'error'}
                        />
                        <span className="error-msg">{error.email && error.email}</span>
                    </div>

                    <div className="form-group">
                        <input type={showPassword ? 'text' : 'password'} name='password' id='password' placeholder='New Password' required />
                        <div className="view-password" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ?
                                    <Eye /> :
                                    <EyeOff />
                            }
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            type={showPasswordConfirm ? 'text' : 'password'}
                            name='confirm_password'
                            id='confirm_password'
                            placeholder='Confirm Password'
                            ref={confirmPasswordRef}
                            required
                            className={error.confirm_password && 'error'}
                        />
                        <div className="view-password" onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}>
                            {
                                showPasswordConfirm ?
                                    <Eye /> :
                                    <EyeOff />
                            }
                        </div>
                        <span className='error-msg'>{error.confirm_password && error.confirm_password}</span>
                    </div>

                    <div className="form-action-items">
                        <div className="action-group">
                            <input type="checkbox" id='check-box' />
                            <label htmlFor="check-box">Keep me signed in</label>
                        </div>
                    </div>

                    <p>By logging in, you agree to Nike's <Link>Privacy Policy</Link> <br />and <Link>Terms of Use</Link></p>
                    <button className='btn-primary' type='submit'>JOiN NiKE</button>

                </form>
            </div>

        </div>
    )
}
