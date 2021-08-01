import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"

const MealItem = (props) =>{
    console.log(props.id)

    const price = `$${props.price}`

    return <li className={props.id=="m4"?`${classes["last-mealitem"]} ${classes.meal}`:classes.meal}>
        <div >
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm id={props.id}></MealItemForm>
        </div>
    </li>
} 

export default MealItem;