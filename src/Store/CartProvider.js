import { useReducer } from "react";
import CartContext from "./cart-context"

const defaultCartState = {
    items : [],
    totalAmount : 0
}

const cartReducer = (state,action) => {

    if(action.type==="ADD")
    {
        const updatedTotalAmount = state.totalAmount+action.item.amount*action.item.price;
        
        const existingCartItemIndex = state.items.findIndex(item=>item.id===action.item.id)
        const existingCartItem = state.items[existingCartItemIndex];
        
        let updatedItems;

        if(existingCartItem){
            let updatedItem = {
                ...existingCartItem,amount:existingCartItem.amount+action.item.amount
            }
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]=updatedItem;
        }
        else
        {
            updatedItems=state.items.concat(action.item);
        }
        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }
    if(action.type==="DELETE"){

        const existingCartItemIndex=state.items.findIndex(item=>item.id===action.id);
        const existingCartItem=state.items[existingCartItemIndex];

        const updatedTotalAmount = state.totalAmount-existingCartItem.price;

        let updatedItems;
        if(existingCartItem.amount===1){
            // updatedItems=[...state.items];
            // updatedItems.splice(existingCartItemIndex,1);
            updatedItems=state.items.filter(item=>item.id!==action.id)
        }
        else{
            let updatedItem = {...existingCartItem,amount:existingCartItem.amount-1}
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex]=updatedItem
        }

        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }
    if(action.type==="CLEAR"){
        return defaultCartState;
    }
    return defaultCartState;
}

const CartProvider = (props) =>{

    const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({type:"ADD",item});
    }

    const deleteItemToCartHandler = id => {
        dispatchCartAction({type:"DELETE",id})
    }

    const clearCartHandler = () =>{
        dispatchCartAction({type:"CLEAR"})
    }

    const cartContext = {
        items : cartState.items,
        totalAmount : cartState.totalAmount,
        addItem : addItemToCartHandler,
        deleteItem : deleteItemToCartHandler,
        clearCart : clearCartHandler
    };

    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider