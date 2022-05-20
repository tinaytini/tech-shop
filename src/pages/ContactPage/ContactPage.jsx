
import scss from './contactPage.module.scss';
import { ReactComponent as Address } from '../../assets/images/icons/address.svg';
import { ReactComponent as Phone } from '../../assets/images/icons/phone.svg';
import { ReactComponent as Time } from '../../assets/images/icons/time.svg';
import { ReactComponent as Email } from '../../assets/images/icons/email.svg';
import ExtraService from '../../components/ExtraService/ExtraService'
import clsx from 'clsx';


function ContactPage() {
    return (
        <div className={clsx('container', scss.contact)}>
            <div className={scss.content}>
                <div className={scss.sendMessage}>
                    <h1>Contact Us</h1>
                    <p className={scss.letter}>We love hearing from you, our Shop customers.</p>
                    <p className={scss.letter}>Please contact us and we will make sure to get back to you as soon as we possibly can.</p>
                    <form action="" className={scss.forms}>
                        <label className={scss.field}>
                            <span>Your Name</span>
                            <input type="text" />
                        </label>
                        <label className={scss.field}>
                            <span>Your Email</span>
                            <input type="text" />
                        </label>
                        <label className={scss.field}>
                            <span>Your Phone Number</span>
                            <input type="text" />
                        </label>
                        <label className={scss.fieldText}>
                            <span>What's on your mind?</span>
                            <input type="text" />
                        </label>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <div className={scss.contacts}>
                    <ul className={scss.box}>
                        <li className={scss.address}>
                            <h3>  <Address /> Address:</h3>
                            <p>1234 Street Adress City Address, 1234</p>
                        </li>
                        <li className={scss.address}>
                            <h3> <Phone /> Phone:</h3>
                            <p>123456789</p>
                        </li>
                        <li className={scss.address}>

                            <h3> <Time /> We Are Open:</h3>
                            <p>Monday - Thursday: 9:00 AM - 5:30 PM</p>
                            <p>Friday 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 11:00 AM - 5:00 PM</p>
                        </li>
                        <li className={scss.address}>
                            <h3> <Email /> Email</h3>
                            <p>shop@gmail.com</p>
                        </li>
                    </ul>

                </div>
            </div>
            <ExtraService />
        </div>
    )


}

export default ContactPage;