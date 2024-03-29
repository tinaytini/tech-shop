import clsx from "clsx";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import { useStore } from "../../context/context";
import RowStyleCard from "../../components/RowStyleCard/RowStyleCard";
import scss from '../CategoryPage/categoryPage.module.scss';
import { ReactComponent as Column } from '../../assets/images/icons/column-view.svg';
import { ReactComponent as Row } from '../../assets/images/icons/row-view.svg';
import { ReactComponent as Open } from '../../assets/images/icons/up.svg';
import PriceFilter from "../../components/PriceFilter/PriceFilter";
import Pagination from "../../components/Pagination/Pagination";
import ExtraService from "../../components/ExtraService/ExtraService";
import ColorFilter from "../../components/ColorFilter/ColorFilter"
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import BrandFilter from "../../components/BrandFilter/BrandFilter";


const initialFilters = {
    color: null,
    brand: null,
    price: null,
    type: null
}


function CategoryPage() {
    const [isRowView, setIsRowView] = useState(false);
    const [colorArr, setColorArr] = useState([]);
    const [brandArr, setBrandArr] = useState([])
    const [priceArr, setPriceArr] = useState([])
    const [typeArr, setTypeArr] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedFilters, setAllFilters] = useState(initialFilters)

    const { products, setProducts } = useStore()

    const fetchAllData = async () => {
        const [resProducts, resTypes, resColors, resBrands] = await Promise.all([
            axios.get('http://localhost:3004/products?'),
            axios.get('http://localhost:3004/types'),
            axios.get('http://localhost:3004/colors'),
            axios.get('http://localhost:3004/brands'),
        ])
        //axios returns object
        setProducts(resProducts.data)
        setColorArr(resColors.data)
        setTypeArr(resTypes.data)
        setBrandArr(resBrands.data)
    }

    useEffect(() => {
        fetchAllData()
    }, [])

    const getProductsPrice = async () => {
        const { data } = await axios.get('http://localhost:3004/products?');
        setProducts(data)
        const prices = data.map(d => d.price)
        setPriceArr(prices)
    }

    const [openFilter, setOpenFilter] = useState({
        category: true,
        priceCategory: true,
        color: true,
        filterName: true,
        brands: true
    })

    const dropFilter = (key) => {
        setOpenFilter((prevState) => ({
            ...prevState, [key]: !openFilter[key]
        }))
    }

    const handleFilterClick = (key, value) => {
        setAllFilters(prevState => ({
            ...prevState,
            [key]: value,
        }))
    }

    //clear button
    const clearFilter = () => {
        setAllFilters(initialFilters)
        getProductsPrice()
    }

    const getFilteredProducts = async () => {
        const selectedPrices = priceArr.filter(price => price <= selectedFilters.price && price >= selectedFilters.price - 1000)
        const { data } = await axios.get(`http://localhost:3004/products`, {
            params: {
                color: selectedFilters.color,
                price: selectedPrices,
                brand: selectedFilters.brand,
                type: selectedFilters.type,
            }
        });
        setProducts(data)
    }

    const pricesFilter = Array.from({ length: 8 }).map((_, i) => {
        const num = 1000 * (i + 1)
        return num
    })

    //pagination
    const postsPerPage = 10;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    /*-----------------------------------------------------------------*/



    return (
        <div className={clsx(scss.wrapper, 'container')}>
            <h2 className={scss.categoryName}>MSI PS Series (20)</h2>
            <div className={scss.settings}>
                <button className={scss.back}>‹  Back</button>
                <span className={scss.number}>Items 1-35 of 61</span>
                <select name="sort" id="#" className={scss.selects}>
                    <option value="" disabled selected hidden >Sort By: Position</option>
                </select>
                <select name="show" id="#" className={scss.selects}>
                    <option value="" disabled selected hidden >Show: 35 per page</option>
                </select>

                <button className={scss.viewBtn} onClick={() => setIsRowView(false)}>
                    < Column
                        className={clsx(scss.columnView, {
                            [scss.checkedView]: isRowView === false
                        })} style={{ backgroundColor: '#8c8c8c' }}
                    />
                </button>

                <button className={scss.viewBtn} onClick={() => setIsRowView(true)}>
                    < Row className={clsx(scss.rowView, {
                        [scss.checkedView]: isRowView === true
                    })} style={{ backgroundColor: '#8c8c8c' }} />
                </button>
            </div>
            <div className={scss.category}>
                <div className={scss.filter}>
                    <h2>Filters</h2>
                    <button className={scss.clear} onClick={clearFilter}>Clear Filters</button>
                    <div className={scss.filterBlocks}>

                        <CategoryFilter
                            dropFilter={dropFilter}
                            openFilter={openFilter}
                            typeArr={typeArr}
                            selectedFilters={selectedFilters}
                            handleFilterClick={handleFilterClick}
                        />

                        <PriceFilter
                            dropFilter={dropFilter}
                            openFilter={openFilter}
                            pricesFilter={pricesFilter}
                            selectedFilters={selectedFilters}
                            handleFilterClick={handleFilterClick}
                        />
                        <ColorFilter
                            dropFilter={dropFilter}
                            openFilter={openFilter}
                            colorArr={colorArr}
                            selectedFilters={selectedFilters}
                            handleFilterClick={handleFilterClick}
                        />
                        <div onClick={() => dropFilter('filterName')} className={scss.titleBlock}>
                            <h3 className={scss.title}>Filter Name</h3>
                            {openFilter.filterName ? <Open className={scss.open} /> : <Open className={scss.close} />}
                        </div>
                    </div>
                    <button className={scss.applyBtn} onClick={getFilteredProducts}>Apply Filters</button>
                    < BrandFilter
                        dropFilter={dropFilter}
                        openFilter={openFilter}
                        brandArr={brandArr}
                        selectedFilters={selectedFilters}
                        handleFilterClick={handleFilterClick}
                    />

                </div>

                <ul className={clsx(!isRowView ? scss.columnCardWrap : scss.rowCardWrap)}>
                    {currentPosts.map(product => (
                        <div key={product.id}>
                            {!isRowView ? (

                                <Link to={`/product/${product.id}`} key={product.id}>
                                    <Card
                                        key={product?.id}
                                        isAvailable={product?.available}
                                        cardImg={product?.image}
                                        title={product?.title}
                                        oldPrice={product?.price}
                                        newPrice={product?.price - (product.price * (product.sale / 100))}

                                    />
                                </Link>


                            ) : (
                                <li className={scss.rowCardWrap}>
                                    <Link to={`/product/${product.id}`} key={product.id}>
                                        <RowStyleCard
                                            key={product?.id}
                                            isAvailable={product?.available}
                                            cardImg={product?.image}
                                            title={product?.title}
                                            desc={product?.description}
                                            oldPrice={product?.price}
                                            newPrice={product?.price - (product.price * (product.sale / 100))}
                                        />
                                    </Link>
                                </li>
                            )}
                        </div>
                    ))}
                </ul>

            </div>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={products.length}
                paginate={paginate}
            />
            <ExtraService />
        </div>
    )
}


export default CategoryPage;