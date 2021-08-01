import { useContext,useEffect,useState } from "react";

import CartContext from "../../Store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";

const CartButton = (props) => {

    const cartCtx = useContext(CartContext);

    const [btnHighlighted,setBtnHighlighted] = useState(false);

    const numberOfCartItems = cartCtx.items.reduce((current,item)=>{
        return (current+item.amount)
    },0);

    const {items} = cartCtx;
    useEffect(()=>{

        if(items===0)
            return
        setBtnHighlighted(true);

        const timer = setTimeout(()=>{
            setBtnHighlighted(false)
        },300)
        
        return()=>{
            clearTimeout(timer)
        };
            
    },[items])

    return <button className={`${classes.button} ${btnHighlighted && classes.bump}`} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default CartButton