import { Fragment } from "react"
import "./Meals.module.css"
import AvailableMeals from "./AvailableMeals"
import MealSummary from "./MealSummary"

const Meals = () =>{
    return <Fragment>
        <MealSummary></MealSummary>
        <AvailableMeals></AvailableMeals>
    </Fragment>
}

export default Meals
