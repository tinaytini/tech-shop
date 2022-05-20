import scss from './rowStyle.module.scss';
import { ReactComponent as Star } from "../../assets/images/icons/Star 1.svg";
import { ReactComponent as Message } from "../../assets/images/icons/message.svg";
import { ReactComponent as Rate } from "../../assets/images/icons/rate.svg";
import { ReactComponent as Favorite } from "../../assets/images/icons/favorite.svg"
import { AvailableStock } from '../ProductAvailable/ProductAvailable';
import { CheckStock } from '../ProductAvailable/ProductAvailable';



function RowStyleCard({isAvailable, cardImg, title, oldPrice, desc, newPrice}) {
    return (
        <li className={scss.cart}>
            <div className={scss.inStock}>
            {isAvailable ? <AvailableStock /> : <CheckStock />}
            </div>
            <div className={scss.left}>
                <img src={cardImg} alt="laptop" />
                <div className={scss.review}>
                    <div className={scss.stars}>
                        < Star className={scss.star} />
                        < Star className={scss.star} />
                        < Star className={scss.star} />
                        < Star className={scss.star} />
                        < Star className={scss.star} />
                    </div>
                    <span>Reviews (4)</span>
                </div>
            </div>
            <div className={scss.middle}>
                <div className={scss.title}> {title} </div>
                <div className={scss.description}> {desc} </div>
                <span className={scss.oldPrice}> {oldPrice}$ </span>
                <span className={scss.newPrice}> {newPrice}$ </span>
                <button className={scss.addToCart}> Add To Cart </button>
            </div>
            <div className={scss.right}>
                <div className={scss.details}>
                    <span>CPU</span>
                    <span>N/A</span>
                </div>
                <div className={scss.details}>
                    <span>Featured</span>
                    <span>N/A</span>
                </div>
                <div className={scss.details}>
                    <span>I/O Parts</span>
                    <span>N/A</span>
                </div>
            </div>
            <div className={scss.icons}>
                <Message/>
                <Rate/>
                <Favorite/>
            </div>
            
        </li>
    )
}

export default RowStyleCard;