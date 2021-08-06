import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem"
import { useEffect, useState } from "react";

const AvailableMeals = () =>{

	const [meals,setMeals] = useState([]);
	const [ isLoading,setIsLoading ] = useState(true);
	const [ httpError,setHttpError] = useState();

	useEffect(()=>{
		fetch("https://meals-backend-dfe0d-default-rtdb.asia-southeast1.firebasedatabase.app/Meals.json")
			.then(resp=>{
				if(!resp.ok){
					throw new Error("Something went wrong!");
				}
				return resp.json();
			})
			
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
				setIsLoading(false);
			})
			.catch(error=>{
				setIsLoading(false);
				setHttpError(error.message);
			})
	},[])

	if(isLoading)
	{
		return <section className={classes["meals-loading"]}>
			<p>Loading...</p>
		</section>
	}

	if(httpError)
	{
		return <section className={classes["meals-error"]}>
			<p>{httpError}</p>
		</section>
	}

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