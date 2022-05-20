
import { AvailableStock } from '../ProductAvailable/ProductAvailable';
import { CheckStock } from '../ProductAvailable/ProductAvailable';
import { ReactComponent as Star } from "../../assets/images/icons/Star 1.svg";
import scss from "./card.module.scss";



function Card({isAvailable, cardImg, title, oldPrice, newPrice, posts, loading}) {
    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
        <div className={scss.card}>
            {isAvailable ? <AvailableStock /> : <CheckStock />}
            <img src={cardImg} alt="#" className={scss.image}/>
            <div className={scss.review}>
                <div className={scss.stars}>
                    < Star className={scss.star}/>
                    < Star className={scss.star}/>
                    < Star className={scss.star}/>
                    < Star className={scss.star}/>
                    < Star className={scss.star}/>
                </div>
                <span>Reviews (4)</span>
            </div>
            <div className={scss.desc}>
                <div className={scss.description}>{title}</div>
                <p className={scss.oldPrice}>{oldPrice}$</p>
                <p className={scss.price}>{newPrice}$</p>
            </div>
        </div>
    )
}

export default Card;

