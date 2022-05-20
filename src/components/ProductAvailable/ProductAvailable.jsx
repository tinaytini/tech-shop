import { ReactComponent as CheckStockIcon } from "../../assets/images/icons/check-stock.svg";
import { ReactComponent as Instock } from "../../assets/images/icons/in-stock.svg"
import clsx from 'clsx';
import scss from '../Card/card.module.scss'

export const AvailableStock = () => {
    return (
        <small className={clsx(scss.status, scss.Instock)}>
            <Instock /> 
            <span>in stock</span>
        </small>
    )
}

export const CheckStock = () => {
    return (
        <small className={clsx(scss.status, scss.checkStock)}>
            <CheckStockIcon />
            <span>check availability</span>
        </small>
    )
}