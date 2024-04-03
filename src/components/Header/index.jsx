import { Link } from "react-router-dom";
import { LuUserCog } from "react-icons/lu";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import './style.css'



export function Header() {
    return (
        <header>
            <div className="nav-list">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/shop" className="nav-item">Shop</Link>
                <Link to="/about" className="nav-item">About</Link>
                <Link to="/contact" className="nav-item">Contact</Link>
            </div>
            <div className="nav-icons">
                <button><LuUserCog /></button>
                <button><HiMiniMagnifyingGlass /></button>
                <button><FaRegHeart /></button>
                <button><TiShoppingCart /></button>
            </div>
        </header>
    )
}