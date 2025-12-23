import { Link } from "react-router";
import styles from "./NavBar.module.css"

export default function NavBar() {
    return(
        <>
            <div className={styles.navBar}>
                <Link to="/">Home</Link>
                <Link to="/shop">Shopping</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </>
    )
}