import { useOutletContext } from "react-router";
import CartContainer from "../components/Container/CartContainer";

export default function Shop() {
    const { addToCart, removeFromCart, cart } = useOutletContext()
    
    return (
        <CartContainer 
            onAdd={addToCart}
            onRemove={removeFromCart}
            cartItems={cart}
        />
    )
}