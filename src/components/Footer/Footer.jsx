import clsx from 'clsx'
import { useEffect, useState } from 'react'
import scss from './footer.module.scss'
import { information } from './FooterData';
import { pcParts } from './FooterData';
import { desktopPCs } from './FooterData';
import { laptops } from './FooterData';
import { ReactComponent as Facebok } from '../../assets/images/socials/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/images/socials/instagram.svg';
import { ReactComponent as Visa } from '../../assets/images/payment-methods/visa.svg';
import { ReactComponent as Paypal } from '../../assets/images/payment-methods/paypal.svg';
import { ReactComponent as Maestro } from '../../assets/images/payment-methods/maestro.svg';
import { ReactComponent as Discover } from '../../assets/images/payment-methods/discover.svg';
import { ReactComponent as AmericanExpress } from '../../assets/images/payment-methods/american-express.svg';



function Footer() {

    return (
        <footer className={scss.footer}>
            <div className={clsx('container', scss.content)}>
                <div className={scss.top}>
                    <div className={scss.left}>
                        <h2 className={scss.title}>Sign Up To Our Newsletter.</h2>
                        <span className={scss.subtitle}>Be the first to hear about the latest offers.</span>
                    </div>
                    <form className={scss.right}>
                        <label>
                            <input type="text" placeholder='Your Email' />
                        </label>
                        <button className={scss.btn}>Subscribe</button>
                    </form>
                </div>
                <ul className={scss.main}>
                    <li className={scss.block}>
                        <ul className={scss.list}>
                            {information.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </li>
                    <li className={scss.block}>
                        <ul className={scss.list}>
                            {pcParts.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </li>
                    <li className={scss.block}>
                        <ul className={scss.list}>
                            {desktopPCs.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </li>
                    <li className={scss.block}>
                        <ul className={scss.list}>
                            {laptops.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </li>
                    <li className={scss.addresses}>
                        <h3>Addresses</h3>
                        <ul className={scss.addresses}>
                            <li>Address: 1234 Street Adress City Address, 1234</li>
                            <li> Phones: (00) 1234 5678</li>
                            <li>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</li>
                            <li>Friday: 9:00 AM - 6:00 PM</li>
                            <li>Saturday: 11:00 AM - 5:00 PM</li>
                            <li>E-mail: shop@email.com</li>
                        </ul>
                    </li>
                </ul>
                <div className={scss.bottom}>
                    <div className={scss.socials}>
                        < Facebok />
                        < Instagram />
                    </div>
                    <div className={scss.payment}>
                        < Visa />
                        < Paypal />
                        < Maestro />
                        < Discover />
                        < AmericanExpress />
                    </div>
                    <span className={scss.copyright}>Copyright © 2020 Tinaytini</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer