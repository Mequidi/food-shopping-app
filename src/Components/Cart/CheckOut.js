import { useRef,useState } from "react";
import classes from "./CheckOut.module.css";

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 6;

const CheckOut = (props) =>{

    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true,
      });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();


    const ConfirmHandler = (event) => {
        event.preventDefault();

        const inputName = nameInputRef.current.value;
        const inputStreet = streetInputRef.current.value;
        const inputPostal = postalInputRef.current.value;
        const inputCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(inputName);
        const enteredStreetIsValid = !isEmpty(inputStreet);
        const enteredCityIsValid = !isEmpty(inputCity);
        const enteredPostalCodeIsValid = isFiveChars(inputPostal);
    
        setFormInputsValidity({
          name: enteredNameIsValid,
          street: enteredStreetIsValid,
          city: enteredCityIsValid,
          postalCode: enteredPostalCodeIsValid,
        });
    
        const formIsValid =
          enteredNameIsValid &&
          enteredStreetIsValid &&
          enteredCityIsValid &&
          enteredPostalCodeIsValid;
    
        if (!formIsValid) {
          return;
        }

        props.onConfirm({
            name:inputName,
            street:inputStreet,
            postalCode:inputPostal,
            city:inputCity
        })
    }

    const nameControlClasses = `${classes.control} ${
        formInputsValidity.name ? '' : classes.invalid
      }`;
      const streetControlClasses = `${classes.control} ${
        formInputsValidity.street ? '' : classes.invalid
      }`;
      const postalCodeControlClasses = `${classes.control} ${
        formInputsValidity.postalCode ? '' : classes.invalid
      }`;
      const cityControlClasses = `${classes.control} ${
        formInputsValidity.city ? '' : classes.invalid
      }`;

    return <form  className={classes.form} onSubmit={ConfirmHandler}>
        <div className={nameControlClasses}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" ref={nameInputRef}/>
            {!formInputsValidity.name && <p>Please enter a valid name!</p>}
        </div>
        <div className={streetControlClasses}>
            <label htmlFor="street">Street</label>
            <input type="text" id="Street" ref={streetInputRef}/>
            {!formInputsValidity.street && <p>Please enter a valid street!</p>}
        </div>
        <div className={postalCodeControlClasses}>
            <label htmlFor="postal">Postal</label>
            <input type="text" id="postal" ref={postalInputRef}/>
            {!formInputsValidity.postalCode && (
            <p>Please enter a valid postal code (6 characters long)!</p>)}
        </div>
        <div className={cityControlClasses}>
            <label htmlFor="city">City</label>
            <input type="text" id="city" ref={cityInputRef}/>
            {!formInputsValidity.city && <p>Please enter a valid city!</p>}
        </div>
        <div className={classes.actions}>    
            <button className={classes.submit}>Confirm</button>
            <button type="button" onClick={props.onCancel}>Cancel</button>
        </div>
    </form>
}

export default CheckOut 