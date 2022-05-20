import scss from './brands.module.scss';
import image1 from '../../assets/images/brands/image-1.png';
import image2 from '../../assets/images/brands/image-2.png';
import image3 from '../../assets/images/brands/image-3.png';
import image4 from '../../assets/images/brands/image-4.png';
import image5 from '../../assets/images/brands/image-5.png';
import image6 from '../../assets/images/brands/image-6.png';

function Brands() {
    return (
        <div className={scss.container}>
            <ul className={scss.brands}>
                <li className={scss.brand}>
                    <img src={image1} alt="#" className={scss.image} />
                </li>
                <li className={scss.brand}>
                    <img src={image2} alt="#" className={scss.image} />
                </li>
                <li className={scss.brand}>
                    <img src={image3} alt="#" className={scss.image} />
                </li>
                <li className={scss.brand}>
                    <img src={image4} alt="#" className={scss.image} />
                </li>
                <li className={scss.brand}>
                    <img src={image5} alt="#" className={scss.image} />
                </li>
                <li className={scss.brand}>
                    <img src={image6} alt="#" className={scss.image} />
                </li>
            </ul>
        </div>
    )
}


export default Brands;