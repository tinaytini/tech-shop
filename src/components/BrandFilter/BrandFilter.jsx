import clsx from "clsx";
import { ReactComponent as Open } from '../../assets/images/icons/up.svg';
import scss from '../../pages/CategoryPage/categoryPage.module.scss';


function BrandFilter({ dropFilter, openFilter, brandArr, handleFilterClick }) {
    return (
        <div className={scss.brands}>
            <div onClick={() => dropFilter('brands')} className={scss.titleBlock}>
                <h3 className={scss.title}>Brands</h3>
                <Open className={clsx(scss.open, {
                    [scss.close]: openFilter.brands === false
                })}
                />
            </div>
            {openFilter.brands &&
                <div className={clsx(scss.filterContainer, scss.brandWrap)}>
                    <div className={scss.brandWrap}>
                        {brandArr.map(b => (
                            <img
                                key={b.id}
                                src={b.logoImg}
                                className={scss.brandImg}
                                onClick={() => handleFilterClick('brand', b.id)} />
                        ))}
                    </div>

                </div>}
        </div>
    )
}

export default BrandFilter