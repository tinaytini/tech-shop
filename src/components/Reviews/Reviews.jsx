import React, { useEffect, useState } from "react";
import clsx from "clsx";
import scss from "./reviews.module.scss";
import SlickSlider from "react-slick";



function Reviews() {
    const [review, setReview] = useState([])
    const [slide, setSlide] = useState(1)

    const GetReview = async () => {
        const responce = await fetch(`http://localhost:3004/comments`)
        const data = await responce.json()
        setReview(data)
    }

    useEffect(() => {
        GetReview()
    }, [slide])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
                style={{
                    backgroundColor: "#0156FF",
                }}
            >
                <ul style={{ margin: "0px", position: "absolute", right: "0", bottom: "-60px" }}>
                    {dots}
                </ul>
            </div>
        ),
    };

    return (

        <div className={clsx('container', scss.review)}>
            <SlickSlider {...settings} >
                {review.map(rev => (
                    <div className={scss.comments} key={rev.id}>
                        <p className={scss.comment}>{rev.review}</p>
                        <p className={scss.author}>- {rev.author}</p>
                    </div>
                ))}
            </SlickSlider>
            <button className={scss.btn}>Leave Us A Review</button>
            {/* <div className={scss.pagination}>
                    <button className={scss.dot} onClick={() => {setSlide(1)}}></button>
                    <button className={scss.dot} onClick={() => {setSlide(2)}}></button>
                    <button className={scss.dot} onClick={() => {setSlide(3)}}></button>
                </div> */}
        </div>



    )
}

export default Reviews