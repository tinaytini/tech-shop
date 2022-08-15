import scss from  './collaps.module.scss'
import { useState } from 'react'
import { ReactComponent as Open } from '../../assets/images/icons/up.svg'
import clsx from 'clsx'

function Collaps({children, title, desc}) {
    const [ filter, setFilter ] = useState({
        destination: true
    })

    const handleDropFilter = (key) => {
        setFilter((prevState) => ({
            ...prevState,
            [key]: !prevState[key]
        }))
    }
    return (
        <div className={scss.collaps}>
            <div onClick={() => handleDropFilter('destination')} className={scss.destination}>
                <div>{title}</div>
                <Open className={clsx(scss.open, {
                    [scss.close]: filter.destination === false
                })}/>
            </div>
            <p className={scss.desc}>{desc}</p>
            {filter.destination && 
                <div>
                    {children}
                </div>
            }
        </div>
    )
}

export default Collaps;