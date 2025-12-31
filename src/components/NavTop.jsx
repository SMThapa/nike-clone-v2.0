import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import air_logo from '../assets/images/air-logo.png';
import { CircleUserRound } from "lucide-react";

import useUserStore from "../zustand/useUserStore";

const NavTop = () => {
    const [show, setShow] = useState(true);

    const user = useUserStore(state => state.user)
    const isLoggedIn = useUserStore(state => state.isLoggedIn)

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY === 0);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`nav-top ${show ? "visible" : "hidden"}`}>
            <Link to="/">
                <div className="logo">
                    <img src={air_logo} alt="logo" />
                </div>
            </Link>

            {
                isLoggedIn ?
                    <div className="user-info">
                        <Link to={'/account'}><CircleUserRound />{user.email}</Link>
                    </div>
                    :
                    <div className="action-buttons">
                        <>
                            <Link to="/">Find a Store</Link>
                            <span></span>
                            <Link to="/">Help</Link>
                            <span></span>
                            <Link to="/register">Join Us</Link>
                            <span></span>
                            <Link to="/login">Sign In</Link>
                        </>
                    </div>
            }
        </div>
    );
};

export default NavTop;
