import scss from './summary.module.scss'
import clsx from 'clsx'
import Select from "react-select";
import countryList from 'react-select-country-list';
import { useState, useMemo } from 'react'
import Collaps from '../Collaps/Collaps'

function Summary({ filter, handleDropFilter }) {

    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
    const changeHandler = value => {
        setValue(value)
    }

    return (
        <div className={scss.summary}>
            <div className={scss.discount}>
                <h3>Summary</h3>
                <Collaps 
                    title="Estimate Shipping and Tax"
                    desc="Enter your destination to get a shipping estimate."
                >
                    <label className={scss.textField}>
                        <span>Country</span>
                        <Select
                            className={scss.select}
                            options={options}
                            value={value}
                            onChange={changeHandler} />
                    </label>
                    <label className={scss.textField}>
                        <span>State/Province</span>
                        <input type="text" />
                    </label>
                    <label className={scss.textField}>
                        <span>Zip/Postal Code</span>
                        <input type="text" />
                    </label>
                    <label className={scss.textField}>
                        <span>Standard Rate</span>
                        <div className={scss.radio}>
                            <input type="radio" name="rate"/>
                            <p>Price may vary depending on the item/destination. Shop Staff will contact you. $21.00</p>
                        </div>
                        
                    </label>
                    <label className={scss.textField}>
                        <span>Pickup from store</span>
                        <div className={scss.radio}>
                            <input type="radio" name="rate"/>
                            <p> 1234 Street Adress City Address, 1234 $0.00</p>
                        </div>
                    </label>
                </Collaps>
                <Collaps 
                    title="Apply Discount Code"
                >
                    <label className={scss.textField}>
                        <span>Enter Discount Code</span>
                        <input type="text" placeholder='Enter Discount Code'/>
                    </label>
                </Collaps>
                <button className={scss.applyBtn}>Apply Discount</button>
            </div>
        </div>
    )
}

export default Summary