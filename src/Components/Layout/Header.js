import { Fragment } from "react";
import classes from "./Header.module.css";
import tableFoodImg from "../../Assets/Table-full-of-food.jpg"
import CartButton from "./CartButton";

const Header = (props) =>{
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <CartButton></CartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={tableFoodImg} alt="table full of food"/>
        </div>
    </Fragment>
}

export default Header