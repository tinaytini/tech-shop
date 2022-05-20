import scss from './support.module.scss';
import img from '../../assets/images/image.png';
import clsx from 'clsx';


function Support() {
    return(
        <div className={clsx('container', scss.support)}>
            <div className={scss.left}>
                <button className={scss.btn}>Product Support</button>
                <button className={scss.btn}>FAQ</button>
                <button className={scss.btn}>Our Buyer Guide</button>
            </div>
            <div className={scss.right}>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default Support
