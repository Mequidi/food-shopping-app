import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem"
import { useEffect, useState } from "react";

// const DUMMY_MEALS = [
//     {
//       id: 'm1',
//       name: 'Sushi',
//       description: 'Finest fish and veggies',
//       price: 22.99,
//     },
//     {
//       id: 'm2',
//       name: 'Schnitzel',
//       description: 'A german specialty!',
//       price: 16.59,
//     },
//     {
//       id: 'm3',
//       name: 'Barbecue Burger',
//       description: 'American, raw, meaty',
//       price: 12.99,
//     },
//     {
//       id: 'm4',
//       name: 'Green Bowl',
//       description: 'Healthy...and green...',
//       price: 18.99,
//     },
//   ];

// const DUMMY_MEALS = [];

const AvailableMeals = () =>{

	const [meals,setMeals] = useState([]);

	useEffect(()=>{
		fetch("https://meals-backend-dfe0d-default-rtdb.asia-southeast1.firebasedatabase.app/Meals.json")
			.then(resp=>resp.json())
			.then(data=>{
				const DUMMY_MEALS = [];

				for(const key in data)
				{
					DUMMY_MEALS.push({
						id: key,
						name: data[key].name,
						description: data[key].description,
						price: data[key].price
					})
				}
				setMeals(DUMMY_MEALS)
			})
	},[])

    const mealsList = meals.map(meal => <MealItem 
      key={meal.id} 
      id={meal.id} 
      name={meal.name} 
      description={meal.description} 
      price={meal.price} />)
    
    return <section className={classes.meals}>
      <Card>
        <ul className={classes["meals-ul"]}>
          {mealsList}
        </ul>
      </Card>
    </section>
    
    
}

export default AvailableMeals