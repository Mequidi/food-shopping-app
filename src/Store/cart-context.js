import react from "react";

const CartContext = react.createContext({
    items : [],
    totalAmount : 0,
    addItem : (item)=>{},
    deleteItem : (id)=>{}
})

export default CartContext