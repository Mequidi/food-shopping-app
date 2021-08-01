import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) =>{

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length>0;

    const cartItemAddHandler = (item) => {

    }

    const cartItemRemoveHandler = (id) => {

    }

    const cartItems = <ul className={classes["cart-items"]}>{cartCtx.items.map(item => (
        <CartItem 
            key = {item.id}
            name = {item.name}
            amount = {item.amount}
            price = {item.price}
            onItemAdd = {cartItemAddHandler}
            onItemRemove = {cartItemRemoveHandler}
        />
    ))}</ul>;

return <Modal onHideCart = {props.onHideCart}>
        {cartItems}
        <div className={classes.total}>
            <span>total price</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onHideCart}>close</button>
            {hasItems && <button className={classes.button}>order</button>}
        </div>
    </Modal>
};

export default Cart;