import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";
import AboutProductMenu from "../../components/AboutProductMenu/AboutProductMenu";
import AboutProductDetail from "../../components/AboutProductDetails/AboutProductDetail";
import AboutProductChip from "../../components/AboutProductChip/AboutProductChip";
import Support from "../../components/Support/Support";
import Features from "../../components/Features/Features";
import ExtraService from '../../components/ExtraService/ExtraService'

function AboutProductPage() {
    const { id } = useParams()
    const [product, setProduct] = useState([])



    const [details, setDetails] = useState('')


    // const showDetails = (key) => {
    //     setDetails((prevState) => ({
    //         ...prevState, [key]: !details[key]
    //     }))
    // }




    const getProducts = async () => {
        const { data } = await axios.get(`http://localhost:3004/products/${id}`)
        setProduct(data)
    }
    useEffect(() => {
        getProducts()
    }, [])
    
    return (
        <div>
            <AboutProductMenu 
            setDetails={setDetails}
            product={product}
            />
            <AboutProductDetail 
                title ={product.title}
                desc={product.description}
                details={details}
                image={product.image}/>
            <AboutProductChip/>
            <Support/>
            <Features/>
            <ExtraService/>
        </div>

    )
}

export default AboutProductPage;