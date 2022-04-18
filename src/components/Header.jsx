import "./Header.scss";
import { ReactComponent as Facebook } from '../assets/images/socials/facebook.svg';
import { ReactComponent as Instagram } from '../assets/images/socials/instagram.svg';
import { ReactComponent as Logo } from '../assets/images/logo1.svg';
import { ReactComponent as Search } from '../assets/images/icons/search.svg'
import { ReactComponent as ShopCart } from '../assets/images/icons/shop-cart.svg'

function Header() {
    return (
        <header className="header">
            <div className="shop-info">
                <div className="container shop-info__content">
                    <div className="open__time">
                        <span>Mon-Thu: </span>  
                        9:00 AM - 5:30 PM
                        <img src="/assets/images/dropdown.svg" alt="" />
                    </div>
                        
                    <div className="header__address">
                        <span>
                            Visit our showroom in 1234 Street Adress City Address, 1234
                        </span>  
                        <a className="address__link">  Contact Us</a>
                    </div>
                    <div className="header__contact">
                        <a href="tel:+(00) 1234 5678">Call Us: (00) 1234 5678</a>
                        <a href="https://www.facebook.com/" className="header__facebook">
                            <Facebook />
                        </a>
                        <a href="https://www.instagram.com/" className="header__instagram">
                            <Instagram />
                        </a>
                    </div>
                </div>
            </div>
            <div className="container main-header">
                <nav className="nav-links">
                    < Logo className="logo" />
                    <a href="" className="link">Laptops</a>
                    <a href="" className="link">Desktop PCs</a>
                    <a href="" className="link">Networking Devices</a>
                    <a href="" className="link">Printers & Scanners</a>
                    <a href="" className="link">PC Parts</a>
                    <a href="" className="link">All Other Products</a>
                    <a href="" className="link">Repairs</a>
                    <button className="deals__btn">Our Deals</button>
                </nav>
                <div className="actions">
                    <button className="search__btn">
                        < Search className="search" />
                    </button>
                    <button className="shop-cart__btn">
                    < ShopCart className="shop-cart" />
                    </button>
                    <img className="profile" src="https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg" alt="#" />
                </div>
            </div>
        </header>
    )
}

export default Header;