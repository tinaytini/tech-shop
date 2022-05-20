import clsx from "clsx";
import { useEffect, useState } from "react";
import SlickSlider from "react-slick";
import { ReactComponent as ZipLogo } from '../../assets/images/icons/zip-logo.svg'
import Card from '../Card/Card';
import scss from './slider.module.scss';


function ZipAd() {
    return (
        <div className={scss.ad}>
            <div className={scss.logo}>
                < ZipLogo />
            </div>
            <p className={scss.title}> own it now, up to 6 months interest free
                <a href="#" className={scss.link}> learn more</a>
            </p>
        </div>
    )
}


function Slider() {
    const [cards, setCards] = useState([]);
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#ccc", borderRadius: "50px" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#ccc", borderRadius: "50px" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const getData = async () => {
        const responce = await fetch(`http://localhost:3004/products?page=1&_limit=12`)
        const data = await responce.json()
        setCards(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>

            <SlickSlider {...settings} className={scss.wrapper}>
                {cards.map(card => (
                    <Card
                        key={card.id}
                        isAvailable={card.available}
                        cardImg={card.image}
                        title={card.title}
                        oldPrice={card.price}
                        newPrice={card.price - (card.price * (card.sale / 100))}
                    />
                ))}
            </SlickSlider>
            < ZipAd />
        </div>

    )
}

export default Slider;