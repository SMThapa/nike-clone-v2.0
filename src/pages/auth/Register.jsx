import { useTitle } from '../../hooks/useTitle'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

export const Register = () => {

    useTitle('Register - NiKE')
    return (
        <div className="register container">

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
                        <label htmlFor="password">New Password</label>
                        <input type="password" name='password' id='password' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm_password">Confirm Password</label>
                        <input type="confirm_password" name='confirm_password' id='confirm_password' />
                    </div>
                </form>

                <div className="form-action-items">
                    <div className="action-group">
                        <input type="checkbox" id='check-box' />
                        <label htmlFor="check-box">Keep me signed in</label>
                    </div>
                </div>

                <p>By logging in, you agree to Nike's <Link>Privacy Policy</Link> <br />and <Link>Terms of Use</Link></p>
                <button className='btn-primary' type='submit'>JOiN NiKE</button>
            </div>

        </div>
    )
}
