import clsx from "clsx";
import scss from '../../pages/CategoryPage/categoryPage.module.scss';
import { ReactComponent as Open } from '../../assets/images/icons/up.svg';


function CategoryFilter({ dropFilter, openFilter, selectedFilters, typeArr, handleFilterClick}) {
    return (
        <div>
            <div onClick={() => dropFilter('category')} className={scss.titleBlock}>
                <h3 className={scss.title}>Category</h3>
                <Open className={clsx(scss.open, {
                    [scss.close]: openFilter.category === false
                })} />
            </div>
            {openFilter.category &&
                <div className={scss.filterContainer}>
                    {typeArr.map(t => (
                        <label key={t.id} className={scss.check}>
                            <input type="checkbox" checked={selectedFilters.type === t.id} onChange={() => handleFilterClick('type', t.id)} />
                            <a href="#" className={scss.link}>{t.name}</a>
                            <span className="count">45</span>

                        </label>
                    ))}
                </div>
            }
        </div>
    )
}

export default CategoryFilter