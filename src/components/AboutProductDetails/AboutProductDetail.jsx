import scss from './aboutProductDetail.module.scss'
import { ReactComponent as Message } from "../../assets/images/icons/message.svg";
import { ReactComponent as Rate } from "../../assets/images/icons/rate.svg";
import { ReactComponent as Favorite } from "../../assets/images/icons/favorite.svg"


function AboutProductDetail({ title, desc, image, details }) {
    return (
        <div className={scss.aboutProduct}>
            <div className={scss.left}>
                <div className={scss.content}>
                    <h1 className={scss.title}>{title}</h1>
                    <a href="#" className={scss.view}>Be the first to review this product</a>
                    <p>
                        {(() => {
                            switch (details) {
                                case "about": return desc;
                                case "detail": return "details";
                                case "specs": return "specs";
                                default: return desc;
                            }
                        })()}
                    </p>
                    <span>Have a Question?
                        <a href="#">Contact Us</a>
                    </span>
                </div>
            </div>
            <div className={scss.right}>
                <div className={scss.icons}>
                    <Message />
                    <Rate />
                    <Favorite />
                </div>
                <img src={image} alt="" className={scss.img} />
            </div>
        </div>
    )
}

export default AboutProductDetail;