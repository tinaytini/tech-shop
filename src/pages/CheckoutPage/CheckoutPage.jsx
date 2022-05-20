import scss from "./checkout.module.scss";
import React, { useState, useMemo } from 'react';
import Select from "react-select";
import countryList from 'react-select-country-list';
import { useForm } from 'react-hook-form';
import ExtraService from "../../components/ExtraService/ExtraService";

function CheckoutPage() {
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
    const changeHandler = value => {
        setValue(value)
    }

    const [users, setUser] = useState('')
    const {register, handleSubmit} = useForm({
        defaultValues: {
            firstName: 'Jhon'
        }
    })
    const mySubmit = async(data) => {
        const res = await fetch('http://localhost:3004/userData', {
            method: 'POST',
            body: JSON.stringify({ ...data, country: value.label }),
            headers: {'content-type': 'application/json'}
        })
        const newUser = await res.json()
        setUser([...users, newUser])
    }
    return (
        <div className="container" >
            <div className={scss.checkoutForm}>
                <div className={scss.right}>
                    <div className={scss.top}>
                        <h1 className={scss.title}>Checkout</h1>
                        <button className={scss.btn}>Sign in</button>
                    </div>
                    <form action="" className={scss.form} onSubmit={handleSubmit(mySubmit)}>
                        <h4 className={scss.title}>Shipping Adsress</h4>
                        <label className={scss.textField}>
                            <span>Email Address</span>
                            <input type="text" {...register('email')}/>
                            <p>You can create an account after checkout.</p>
                        </label>
                        <label className={scss.textField}>
                            <span>First Name</span>
                            <input type="text" {...register('firstName')}/>
                        </label>
                        <label className={scss.textField}>
                            <span>Last Name</span>
                            <input type="text"  {...register('lastName')}/>
                        </label>
                        <label className={scss.textField}>
                            <span>Company</span>
                            <input type="text"  {...register('company')}/>
                        </label>
                        <label className={scss.textField}>
                            <span>Street Address</span>
                            <input type="text" {...register('address')}/>
                        </label>
                        <label className={scss.textField}>
                            <span>City</span>
                            <input type="text"  {...register('city')}/>
                        </label>
                        <label className={scss.textField}>
                            <span>Postal Code</span>
                            <input type="text" {...register('postalCode')}/>
                        </label>
                        <label className={scss.textField}>
                            <span>Country</span>
                            <Select 
                                className={scss.reactSelectContainer} 
                                options={options} 
                                value={value} 
                                onChange={changeHandler} />
                        </label>

                        <label className={scss.textField}>
                            <span>Phone Number</span>
                            <input type="text" name="phoneNumber" className={scss.phone}  {...register('phoneNumber')}/>
                        </label>
                        <label className={scss.checkbox}>
                            <div>Standard Rate</div>
                            <input 
                                type="radio" 
                                name="delivery-price" 
                                id="standard" 
                                value="delivery"
                                {...register('delivery')}
                            />
                            <span> Price may vary depending on the item/destination. Shop Staff will contact you.</span>
                            <h5>$21.00</h5>
                        </label>
                        <label className={scss.checkbox}>
                            <div>Pickup from store</div>
                            <input 
                                type="radio" 
                                name="delivery-price" 
                                id="pickUp" 
                                value="self-pickup" 
                                {...register('self-pickup')}
                            />
                            <span> 1234 Street Adress City Address, 1234</span>
                            <h5>$0.00</h5>
                        </label>
                        <button type="submit" className="submit">Next</button>
                    </form>
                </div>
                <div className={scss.status}></div>
            </div>
            <div className={scss.service}>
                < ExtraService />
            </div>
        </div>
    )
}

export default CheckoutPage;