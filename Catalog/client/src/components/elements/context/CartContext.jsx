import { createContext, useState } from "react";

const CartContext = createContext();

export function CartContextProvider({ children }) {

    const [inCart, setInCart] = useState([])
    const [newPurchase, setNewPurchase] = useState(false)
    const [orders, setOrders] = useState(null)

    const handleCart = (id, quantity) => {
        if (inCart.find(product => product.id === id) === undefined) {
            setInCart((prevState)=>([...prevState, {id: id, quantity: quantity}]))
        }
    }

    const discountPrice = (price, discount) => {
        const discountedSum = (parseFloat(price) * Number(discount)) / 100;
        const finalPrice = Number(price) - discountedSum
        return finalPrice.toFixed(2)
    }

    return (
        <CartContext.Provider
            value={{
                inCart, setInCart, handleCart, newPurchase, setNewPurchase, orders, setOrders, discountPrice
            }}>
            {children}  
        </CartContext.Provider>
    );
}

export default CartContext;