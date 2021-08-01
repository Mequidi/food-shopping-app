import classes from "./Cart.module.css";

const Cart = () =>{

    const cartItems = <ul className={classes["cart-items"]}>{[{id:"m5",name:"sushi",amount:"2",price:"30.99"}].map(item => <li>
        {item.name}
    </li>)}</ul>;

return <div>
        {cartItems}
        <div className={classes.total}>
            <span>total price</span>
            <span>62.99</span>
        </div>
        <div className={classes.actions}>
            <button className={classes["button--alt"]}>close</button>
            <button className={classes.button}>order</button>
        </div>
    </div>
};

export default Cart;