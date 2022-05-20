import { useEffect, useState } from "react";
import Card from '../Card/Card';
import scss from './cardList.module.scss';
import clsx from "clsx";


function Category({subclass}) {
    return(
        <div className={scss.categories}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_iTenudSt63bMmMH2CnaSlKo1alC0l4FcytICLNxfQO5wZG9p59p7CS5VaI0jgLpnOY&usqp=CAU" alt="#" className={scss.image} />
            <p>{subclass}</p>
            <a href="#" className="link">See All Products</a>
        </div>
    )
}



function CardList({ subclass, withCategory = true }) {
    const [cards, setCards] = useState([]);


    const GetCardList = async() => {
        const responce = await fetch(`http://localhost:3004/products?_limit=5`)
        const data = await responce.json()
        setCards(data)
    }

    useEffect(() => {
        GetCardList()
    }, [])
    
    return (
        <div className={clsx('container', scss.cardList)}>
            {withCategory ? < Category subclass={subclass}/> : null}
            <ul className={scss.wrapper}>
                {cards.map(card => (
                <Card key={card.id}
                    isAvailable={card.available}
                    cardImg={card.image}
                    title={card.title}
                    oldPrice={card.price}
                    newPrice={card.price - (card.price * (card.sale / 100))}
                />
                ))}
            </ul>
        </div>
    )
}


export default CardList;