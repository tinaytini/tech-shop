import scss from './aboutProductMenu.module.scss';
import clsx from 'clsx';
import {ReactComponent as Paypal} from '../../assets/images/paypal.svg'
function AboutProductMenu({product, setDetails}) {
    return (
        <div className="container">
            <div className={scss.productDetails}>
                <ul className={scss.productMenu}>
                    <a onClick={()=>{setDetails('about')}}>About Product</a>
                    <a onClick={()=>{setDetails('detail')}}>Details</a>
                    <a onClick={()=>{setDetails('specs')}}>Specs</a>
                </ul>
                <div className={scss.payments}>
                    <span className={scss.price}>On Sale from <strong>${product.price - (product.price * (product.sale / 100))}</strong></span>
                    <label>
                        <input type="number" defaultValue={1} />
                    </label>
                    <button className={scss.addToCart}>Add To Cart</button>
                    <button className={scss.paypal}>
                        <Paypal/>
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default AboutProductMenu