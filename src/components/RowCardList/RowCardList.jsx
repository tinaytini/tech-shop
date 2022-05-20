import axios from "axios";
import { useEffect, useState } from "react";
import RowStyledCard from '../RowStyleCard/RowStyleCard'


function RowCardList() {

    const [cards, setCards] = useState([]);


    const GetCardList = async() => {
        const data = await axios.get(`http://localhost:3004/products`)
        setCards(data)
    }

    useEffect(() => {
        GetCardList()
    }, [])

    return(
        <div className={clsx('container', scss.rowList)}>
            <ul className={scss.wrapper}>
                {cards.map(card => (
                    < RowStyledCard 
                        key={card.id}
                        isAvailable={card.available}
                        cardImg={card.image}
                        title={card.title}
                        oldPrice={card.price}
                        desc={card.description}
                        newPrice={card.price - (card.price * (card.sale / 100))}
                    />
                ))}
            </ul>
        </div>
    )
}

export default RowCardList;