import { Link } from "react-router";

export default function NavBar() {
    return(
        <>
            <Link to="/">Home</Link>
            <Link to="/shop">Shopping</Link>
            <Link to="/cart">Cart</Link>
        </>
    )
}