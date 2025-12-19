import { useTitle } from '../../hooks/useTitle'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

export const Login = () => {
    useTitle('Login - NiKE')
    return (
        <div className="login container">

            <div className="contents">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="slogan">your account for <br /> everything nike</div>

                <form>

                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" name='email' id='email' />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' />
                    </div>
                </form>

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
            </div>

        </div>
    )
}
