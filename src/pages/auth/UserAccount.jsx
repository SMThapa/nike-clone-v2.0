import React, { useState } from 'react'
import useUserStore from '../../zustand/useUserStore'

import {
    User, ShoppingBasket,
    MapPinCheckInside,
    LockKeyhole,
    CreditCard,
    MessageCircleMore,
    LogOut,
    CircleArrowRight
} from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Address } from '../../components/UserAccount/Address';
import { MyOrders } from '../../components/UserAccount/MyOrders';

export const UserAccount = () => {
    const user = useUserStore(state => state.user);
    const logout = useUserStore(state => state.logout);
    const navigate = useNavigate();

    const [activeSection, setActiveSection] = useState('order');
    const handleClick = (type) => {
        if (type != activeSection) {
            setActiveSection(type)
        }
    }

    const handleLogOut = () => {
        logout()
        navigate('/')
        toast.success('Logged Out.')
    }

    return (
        <div className="user-account container">
            <div className="top-section">
                <p>Your Account Info</p>
                <div className="section-title">{user.email}</div>
                <p>User Id: {user.userId}</p>
            </div>
            <div className="main-content">
                <div className="left">
                    <div className="options">
                        <button className={activeSection == 'order' ? "active" : ''} onClick={() => handleClick('order')}> <ShoppingBasket />my orders <span className="arrow"><CircleArrowRight /></span></button>
                        <button className={activeSection == 'address' ? "active" : ''} onClick={() => handleClick('address')}><MapPinCheckInside />My Addresses <span className="arrow"><CircleArrowRight /></span></button>
                        <button className={activeSection == 'security' ? "active" : ''} onClick={() => handleClick('security')}><LockKeyhole />Security & Login <span className="arrow"><CircleArrowRight /></span></button>
                        <button className={activeSection == 'payment' ? "active" : ''} onClick={() => handleClick('payment')}><CreditCard />Payments <span className="arrow"><CircleArrowRight /></span></button>
                        <hr />
                        <button className={activeSection == 'support' ? "active" : ''} onClick={() => handleClick('support')}><MessageCircleMore />customer support <span className="arrow"><CircleArrowRight /></span></button>
                        <button onClick={handleLogOut} className='logout'><LogOut />Logout</button>
                    </div>
                </div>
                <div className="right">

                    <div className="contents">
                        <div className={`item order ${activeSection == 'order' ? 'active' : ''}`}>

                            <MyOrders />
                        </div>
                        <div className={`item address ${activeSection == 'address' ? 'active' : ''}`}>
                            <div className="title">My Address</div>
                            <Address />
                        </div>
                        <div className={`item security ${activeSection == 'security' ? 'active' : ''}`}>
                            <div className="title">Login & Passwords</div>
                        </div>
                        <div className={`item payment ${activeSection == 'payment' ? 'active' : ''}`}>
                            <div className="title">Payment Info.</div>
                        </div>
                        <div className={`item support ${activeSection == 'support' ? 'active' : ''}`}>
                            <div className="title">Customer Support</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
