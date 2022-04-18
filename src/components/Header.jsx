import "./Header.scss";

function Header() {
    return (
        <header className="header">
            <div className="shop-info">
                <div className="container shop-info__content">
                    <div className="open__time">
                        <span>Mon-Thu: </span>  
                        9:00 AM - 5:30 PM</div>
                    <div className="header__address">
                        <span>
                            Visit our showroom in 1234 Street Adress City Address, 1234
                        </span>  
                        <a className="address__link"> Contact Us</a>
                    </div>
                    <div className="header__contact">
                        <a href="tel:+(00) 1234 5678">Call Us: (00) 1234 5678</a>
                        <a href="https://www.facebook.com/" className="header__facebook">
                            <img src="/assets/images/socials/facebook.svg" alt="facebook"/>
                        </a>
                        <a href="https://www.instagram.com/" className="header__instagram">
                            <img src="/assets/images/socials/instagram.svg" alt="facebook"/>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;