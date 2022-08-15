import clsx from 'clsx'
import scss from  './cartPage.module.scss'
import ExtraService from '../../components/ExtraService/ExtraService'
import Summary from '../../components/Summary/Summary'
import { useState } from 'react'

function CartPage() {

    return (
        <div className={clsx('container', scss.cartWrap)} >
            <h1>Shopping Cart</h1>
            <div className={scss.content}>
                <div className={scss.cart}>
                    <div className={clsx(scss.cartRow, scss.cartHead)}>
                        <p>Item</p>
                        <p>Price</p>
                        <p>Qty</p>
                        <p>Subtotal</p>
                    </div>
                    <div className={clsx(scss.cartRow, scss.cartBody)}>
                        <div className={scss.cartImg}>
                            <img src="https://object.pscloud.io/cms/cms/Photo/img_0_62_2205_1_6.png" alt="" />
                            <p>MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty</p>
                        </div>
                        <span>324$</span>
                        <input type="number" />
                        <span>3452$</span>
                        <div className={scss.icons}>W</div>
                    </div>
                    <div className={scss.actionBtns}>
                        <button className={scss.gray}>Continue Shopping</button>
                        <button>Clear Shopping Cart</button>
                        <button>Update Shopping Cart</button>
                    </div>
                </div>
                <Summary />
            </div>
            <ExtraService/>
        </div>
        
    )
}

export default CartPage