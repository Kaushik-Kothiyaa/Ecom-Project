import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/template-white-logo.png";
import cartIcon from "../assets/images/cart-shopping.svg";
import searchIcon from "../assets/images/search-icon.svg";
import product1 from "../assets/images/single-product/1.jpg";
import product2 from "../assets/images/single-product/2.jpg";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="site-navbar">
            <div className="navbar-container">

                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="TailStore" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="navbar-menu">
                    <Link to="/" className="navbar-link">Home</Link>
                    <Link to="/products" className="navbar-link">Products</Link>
                    <Link to="/categories" className="navbar-link">Categories</Link>
                    <Link to="/checkout" className="navbar-link">Checkout</Link>                    
                    <Link to="#" className="navbar-link">My Profile</Link>
                </nav>

                {/* Desktop Actions */}
                <div className="navbar-actions">
                    <Link to="/register" className="navbar-button">Register</Link>
                    <Link to="/login" className="navbar-button">Login</Link>

                    <div className="navbar-cart">
                        <Link to="/cart" className="navbar-icon">
                            <img src={cartIcon} alt="Cart" />
                        </Link>

                        <div className="cart-dropdown">
                            <h3>Shopping Cart</h3>

                            <div className="cart-product">
                                <img src={product1} alt="Summer black dress" />
                                <div>
                                    <h4>Summer black dress</h4>
                                    <p>$19.99</p>
                                </div>
                            </div>

                            <div className="cart-product">
                                <img src={product2} alt="Black suit" />
                                <div>
                                    <h4>Black suit</h4>
                                    <p>$29.99</p>
                                </div>
                            </div>

                            <Link to="/cart" className="cart-button">Go to Cart</Link>
                        </div>
                    </div>

                    <button type="button" className="navbar-search">
                        <img src={searchIcon} alt="Search" />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="mobile-menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="mobile-navbar-menu">
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
                    <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
                    <Link to="/checkout" onClick={() => setMenuOpen(false)}>Checkout</Link>
                    <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
                    <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
                </div>
            )}
        </header>
    );
};