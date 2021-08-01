import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input"
import { useRef,useState } from "react";

const MealItemForm = (props) =>{

    const inputRef = useRef();
    const [ isValidAmount, setIsValidAmount ] = useState(true);

    const submitHandler = event =>{
        event.preventDefault();
        const enteredAmount = inputRef.current.value;
        const enteredAmountNumber = Number(enteredAmount);
        
        if(enteredAmount.trim().length===0 || enteredAmountNumber<1 || enteredAmountNumber>5 )
        {
            setIsValidAmount(true)
            return; 
        } 
        props.onAddToCart(enteredAmountNumber);
    }

    return <form className ={classes.form} onSubmit={submitHandler} > 
        <Input 
            ref={inputRef}
            label="Amount"
            input = {{
                id:"amount_" + props.id,
                type:"number",
                min:"1",
                max:"5",
                step:"1",
                defaultValue:"1"
            }}
        />
        <button>+ Add</button>
        {!isValidAmount&&<p>Please entere valid amount [1-5].</p>}
    </form>
}

export default MealItemForm;