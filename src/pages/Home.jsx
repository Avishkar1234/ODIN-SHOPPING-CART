import { useOutletContext } from "react-router";
import CartContainer from "../components/Container/CartContainer";

export default function Home() {
    const { addToCart, removeFromCart, cart } = useOutletContext();

    return (
        <CartContainer
            number={10}
            onAdd={addToCart}
            onRemove={removeFromCart}
            cartItems={cart}
        />
    )
}