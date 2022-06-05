import { useEffect, useState, useContext } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useStore } from "../../context/context";
import AboutProductMenu from "../../components/AboutProductMenu/AboutProductMenu";
import AboutProductDetail from "../../components/AboutProductDetails/AboutProductDetail";
import AboutProductChip from "../../components/AboutProductChip/AboutProductChip";
import Support from "../../components/Support/Support";
import Features from "../../components/Features/Features";
import ExtraService from '../../components/ExtraService/ExtraService'

function AboutProductPage() {
    const { id } = useParams()
    const [details, setDetails] = useState('')
    const {products, setProducts} =  useStore

    const getProducts = async () => {
        const { data } = await axios.get(`http://localhost:3004/products/${id}`)
        setProducts(data)
    }
    useEffect(() => {
        getProducts()
    }, [])
    
    return (
        <div>
            <AboutProductMenu 
            setDetails={setDetails}
            product={products}
            />
            <AboutProductDetail 
                title ={products.title}
                desc={products.description}
                details={details}
                image={products.image}/>
            <AboutProductChip/>
            <Support/>
            <Features/>
            <ExtraService/>
        </div>

    )
}

export default AboutProductPage;