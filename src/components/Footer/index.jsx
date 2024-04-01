import { Link } from "react-router-dom";
import './style.css'

export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="location">
                    <h5>SENAI Cotia - "Ricardo Lerner"</h5>
                    <h5>R. Direita, 955 - Vila Santo Antônio, Cotia - SP, 06708-280</h5>
                </div>
                <div className="links">
                    <h5>Links</h5>
                    <div className="link-items">
                        <Link to="/" className="link-item"><span>Home</span></Link>
                        <Link to="/shop" className="link-item"><span>Shop</span></Link>
                        <Link to="/about" className="link-item"><span>About</span></Link>
                        <Link to="/contact" className="link-item"><span>Contact</span></Link>
                    </div>
                </div>
                <div className="help">
                    <h5>Help</h5>
                    <div className="link-items">
                        <Link to="#" className="link-item"><span>Payment</span></Link>
                        <Link to="#" className="link-item"><span>Returns</span></Link>
                        <Link to="#" className="link-item"><span>Privacy Policies</span></Link>
                    </div>
                </div>
            </div>
            <hr />
            <div className="rightsReserved">
                <h4>2024 Arthur. All rights reverved</h4>
            </div>
        </footer>
    );
}
