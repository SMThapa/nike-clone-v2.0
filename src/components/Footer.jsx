import { Link } from "react-router-dom";
import { Copyright } from "lucide-react";
export const Footer = () => {
    return (
        <footer>
            <div className="footer ">
                <div className="section">
                    <div className="title">Resources</div>

                    <Link to={'/'}>find a store</Link>
                    <Link to={'/'}>become a member</Link>
                    <Link to={'/'}>running shoe finder</Link>
                    <Link to={'/'}>product advice</Link>
                    <Link to={'/'}>nike coaching</Link>
                    <Link to={'/'}>send us feedback</Link>
                </div>
                <div className="section">
                    <div className="title">Help</div>

                    <Link to={'/'}>Get help</Link>
                    <Link to={'/'}>order status</Link>
                    <Link to={'/'}>delivery</Link>
                    <Link to={'/'}>returns</Link>
                    <Link to={'/'}>payment options</Link>
                    <Link to={'/'}>contact us on nike.com inquiries</Link>
                    <Link to={'/'}>contact us on all other inquiries</Link>
                </div>
                <div className="section">
                    <div className="title">Company</div>

                    <Link to={'/'}>about nike</Link>
                    <Link to={'/'}>news</Link>
                    <Link to={'/'}>careers</Link>
                    <Link to={'/'}>investors</Link>
                    <Link to={'/'}>sustainabilitiy</Link>
                    <Link to={'/'}>impact</Link>
                    <Link to={'/'}>report a concern</Link>
                </div>
            </div>

            <div className="footer-bottom">
                <Copyright /> 2025 Nike, Inc. All right reserved
            </div>
        </footer>

    )
}
