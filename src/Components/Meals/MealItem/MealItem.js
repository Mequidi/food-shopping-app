import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"
import { useContext } from "react"
import CartContext from "../../../Store/cart-context"

const MealItem = (props) =>{

    const cartCtx = useContext(CartContext);    

    const price = `$${props.price}`

    const addToCartHandler = (amount) =>{
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount ,
            price :props.price
        })
    }

    return <li className={props.id==="m4"?`${classes["last-mealitem"]} ${classes.meal}`:classes.meal}>
        <div >
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm id={props.id} onAddToCart = {addToCartHandler}></MealItemForm>
        </div>
    </li>
} 

export default MealItem;