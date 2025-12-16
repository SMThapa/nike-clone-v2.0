import men from '../../assets/images/men.avif';
import women from '../../assets/images/women.avif';
import kid from '../../assets/images/kids.avif';

import { Link } from 'react-router-dom';

export const Shop = () => {
    return (
        <div className='home-shop container'>
            <div className="section-title">Shop</div>
            <div className="section-desc">Styles for everyone — from everyday comfort to standout looks.</div>

            <div className="section-contents">
                <Link to={'/'}>
                    <div className="section-card">
                        <img src={men} alt="men" />

                        <div className="title">For Men</div>
                    </div>
                </Link>
                <Link to={'/'}>
                    <div className="section-card">
                        <img src={women} alt="women" />

                        <div className="title">For Women</div>
                    </div>
                </Link>
                <Link to={'/'}>
                    <div className="section-card">
                        <img src={kid} alt="kid" />

                        <div className="title">For Kids</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
