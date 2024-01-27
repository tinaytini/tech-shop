import scss from './search.module.scss'
const InputSearch = () => {
    return (
        <div className={scss.searchContainer}>
            <input className={scss.searchInput} type="search" value='search'/>
        </div>
    )
}

export default InputSearch;