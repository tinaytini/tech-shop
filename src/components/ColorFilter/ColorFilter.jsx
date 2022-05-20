import clsx from "clsx";
import scss from '../../pages/CategoryPage/categoryPage.module.scss';
import { ReactComponent as Open } from '../../assets/images/icons/up.svg';


function ColorFilter({ dropFilter, openFilter, colorArr, selectedFilters, handleFilterClick }) {
    return (
        <div>
        <div onClick={() => dropFilter('color')} className={scss.titleBlock}>
            <h3 className={scss.title}>Color</h3>
            <Open className={clsx(scss.open, {
                [scss.close]: openFilter.color === false
            })} />
        </div>
        {openFilter.color &&
            <div className={clsx(scss.filterContainer, scss.colorWrap)}>
                {colorArr.map(c => (
                    <label key={c.id} className={clsx(scss.color1, {
                        [scss.checkedColor]: selectedFilters.color === c.id
                    })} style={{ backgroundColor: c.value }} >
                        <input
                            type="radio"
                            value={c.value}
                            checked={selectedFilters.color === c.id}
                            onChange={() => handleFilterClick('color', c.id)} />
                    </label>
                ))}
            </div>
        }
    </div>
    )
    
}

export default ColorFilter;