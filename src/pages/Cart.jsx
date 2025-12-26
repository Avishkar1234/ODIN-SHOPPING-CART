import { useOutletContext } from "react-router";
import CartContainer from "../components/Container/CartContainer";

export default function Cart() {
    const { cart, addToCart, removeFromCart } = useOutletContext(); 

    const productIds = Object.keys(cart);

    if (productIds.length === 0) {
        return <h2>Your cart is empty!</h2>;
    }
    
    return (
        <CartContainer 
            cartOnly={true}
            cartItems={cart}
            onAdd={addToCart}
            onRemove={removeFromCart}
        />
    );
}