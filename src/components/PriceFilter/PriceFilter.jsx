import clsx from "clsx";
import { ReactComponent as Open } from '../../assets/images/icons/up.svg';
import scss from '../../pages/CategoryPage/categoryPage.module.scss';



function PriceFilter({ dropFilter, openFilter, pricesFilter, selectedFilters, handleFilterClick, }) {


    return (
        <div>
            <div onClick={() => dropFilter('priceCategory')} className={scss.titleBlock}>
                <h3 className={scss.title}>Price</h3>
                <Open className={clsx(scss.open, {
                    [scss.close]: openFilter.priceCategory === false
                })} />
            </div>
            {openFilter.priceCategory &&
                <div className={scss.filterContainer}>
                    {pricesFilter.map((p, idx) => (
                        <label key={p} className={scss.check}>
                            <input
                                type="checkbox"
                                name={p}
                                value={p}
                                checked={selectedFilters.price === p}
                                onChange={() => handleFilterClick('price', p)}
                            />
                            {idx !== pricesFilter.length - 1
                                ? <a href="#" className={scss.link}>${p - 1000} - ${p}</a>
                                : <a href="#" className={scss.link}>${p - 1000} And Above</a>
                            }
                            <span className="count">3</span>
                        </label>
                    ))}
                </div>
            }
        </div>
    )
}

export default PriceFilter