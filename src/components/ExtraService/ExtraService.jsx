import clsx from "clsx";
import scss from './extraService.module.scss';
import { Link } from "react-router-dom";
import { ReactComponent as Support } from "../../assets/images/Support.svg";
import { ReactComponent as Account } from "../../assets/images/Account.svg";
import { ReactComponent as Saving } from "../../assets/images/Saving.svg"

function ExtraService() {
    return (
        <div className={clsx('container', scss.services)}>
            <Link to={`/contacts`} className={scss.support}>
                <Support/>
                <h2 className={scss.title}>Product Support</h2>
                <p className={scss.desc}>Up to 3 years on-site warranty available for your peace of mind.</p>
            </Link>
            <div className={scss.support}>
                <Account/>
                <h2 className={scss.title}>Personal Account</h2>
                <p className={scss.desc}>Up to 3 years on-site warranty available for your peace of mind.</p>
            </div>
            <div className={scss.support}>
                <Saving/>
                <h2 className={scss.title}>Amazing Savings</h2>
                <p className={scss.desc}>Up to 3 years on-site warranty available for your peace of mind.</p>
            </div>
        </div>
    )
}

export default ExtraService;