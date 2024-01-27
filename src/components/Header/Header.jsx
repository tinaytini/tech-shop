import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { ReactComponent as Facebook } from '../../assets/images/socials/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/images/socials/instagram.svg';
import { ReactComponent as Logo } from '../../assets/images/logo1.svg';
import { ReactComponent as Search } from '../../assets/images/icons/search.svg';
import { ReactComponent as ShopCart } from '../../assets/images/icons/shop-cart.svg';
import { ReactComponent as Dropdown } from '../../assets/images/dropdown.svg'
import scss from "./Header.module.scss";
import { useState } from 'react';
import InputSearch  from '../InputSearch/InputSearch';

const menu = [
    {
        title: 'Laptops',
        link: 'laptops',
    },
    {
        title: 'Desktop PCs',
        link: 'desktop-PC',
    },
    {
        title: 'Networking Devices',
        link: 'networking-devices',
    },
    {
        title: 'Printers & Scanners',
        link: 'printers-scanners',
    },
    {
        title: 'PC Parts',
        link: 'pc-parts'
    },
    {
        title: 'All Other Products',
        link: 'other-products',
    },
    {
        title: 'Repairs',
        link: 'repaires'
    }
]

function Header() {
    const [showSearch, setShowSearch] = useState(false)

    const handleSearchBtn = () => {
        setShowSearch(!showSearch)
    }


    return (
        <header className={scss.wrapper}>
            <div className={scss.shopInfo}>
                <div className={clsx(scss.container, scss.content)}>
                    <div className={scss.openTime}>
                        <span>Mon-Thu: </span>
                        9:00 AM - 5:30 PM
                        < Dropdown className={scss.dropdown} />
                    </div>

                    <div className={scss.address}>
                        <span>
                            Visit our showroom in 1234 Street Adress City Address, 1234
                        </span>
                        <a className={scss.addressLink}>Contact Us</a>
                    </div>
                    <div className={scss.contact}>
                        <a href="tel:+(00) 1234 5678">Call Us: (00) 1234 5678</a>
                        <a href="https://www.facebook.com/" className={scss.facebook}>
                            <Facebook />
                        </a>
                        <a href="https://www.instagram.com/" className={scss.instagram}>
                            <Instagram />
                        </a>
                    </div>
                </div>
            </div>
            <div className={clsx(scss.container, scss.mainHeader)}>
                <Link to="/">
                    < Logo className={scss.logo} />
                </Link>
                {showSearch ? (<InputSearch />) :
                    (<nav className={scss.navLinks}>
                        {menu.map((item) => (
                            <Link key={item.title} to={`/category/${item.link}`} className={scss.link}>{item.title}</Link>
                        ))}
                        <button className={scss.deals}>Our Deals</button>
                    </nav>)
                }

                <div className={scss.actions}>
                    <button className={scss.searchBtn} onClick={handleSearchBtn}>
                        < Search className={scss.search} />
                    </button>
                    <button className={scss.shopCartBtn}>
                        < ShopCart className={scss.shopCart} />
                    </button>
                    <img className={scss.profile} src="https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg" alt="#" />
                </div>
            </div>
        </header>
    )
}

export default Header;