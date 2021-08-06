import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { Fragment, useContext, useState } from "react";
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";
import CheckOut from "./CheckOut";

const Cart = (props) =>{

    const cartCtx = useContext(CartContext);
    const [ showCheckOut, setShowCheckOut ] = useState(false);
    const [ isSubmitting,setIsSubmitting ] = useState(false);
    const [ didSubmit,setDidSubmit ] = useState(false);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length>0;

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item,amount:1})
    }

    const cartItemRemoveHandler = (id) => {
       cartCtx.deleteItem(id)
    }

    const orderHandler = () =>{
        setShowCheckOut(true)
    }

    const CheckOutShowHandler = () =>{
        setShowCheckOut(false)
    }

    const submitOrderHandler = (userData) => {
        setIsSubmitting(true);
        fetch("https://meals-backend-dfe0d-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",{
            method:"POST",
            body:JSON.stringify({
                user:userData,
                items:cartCtx.items
            })
        })
        setIsSubmitting(false);
        setDidSubmit(true)
        cartCtx.clearCart();
    }

    const cartItems = <ul className={classes["cart-items"]}>{cartCtx.items.map(item => (
        <CartItem 
            key = {item.id}
            name = {item.name}
            amount = {item.amount}
            price = {item.price}
            onItemAdd = {cartItemAddHandler.bind(null,item)}
            onItemRemove = {cartItemRemoveHandler.bind(null,item.id)}
        />
    ))}</ul>;

    const modalButtons = <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>close</button>
        {hasItems && <button className={classes.button} onClick={orderHandler}>order</button>}
    </div>

    const modalContent = <Fragment>
        {cartItems}
        <div className={classes.total}>
            <span>total price</span>
            <span>{totalAmount}</span>
        </div>
        {showCheckOut && <CheckOut onCancel = {CheckOutShowHandler} onConfirm ={submitOrderHandler} />}
        {!showCheckOut && modalButtons}
    </Fragment>

    const isSubmittingModalContent = <p>Sending order data...</p>

    const didSubmitModalContent =  <Fragment>
        <p>Successfully sent the order!</p>
        <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onHideCart}>close</button>
        </div>
    </Fragment>  

return <Modal onHideCart = {props.onHideCart}>
        {!isSubmitting && !didSubmit && modalContent}
        {isSubmitting && isSubmittingModalContent}
        {!isSubmitting && didSubmit && didSubmitModalContent }
    </Modal>
};

export default Cart;