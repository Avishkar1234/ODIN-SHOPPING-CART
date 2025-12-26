import { FaRegTrashAlt } from "react-icons/fa";
import styles from "./AddCart.module.css"

export default function AddToCart({ product, onAdd, onRemove, quantity = 0 }) {
    
    const increaseCount = () => {
        onAdd(product)
    }

    const decreaseCount = () => {
        if (quantity > 0) {
            onRemove(product.id)
        }
    }

    if (quantity === 0) {
        return (
            <div className={styles.cartButton}>
                <button className={styles.initialBtn} onClick={increaseCount}>
                    +Cart
                </button>
            </div>
        )
    }

    return (
        <div className={styles.cardContainer}>
            <button type="button" id={styles.decreaseButton} onClick={decreaseCount}>
                <FaRegTrashAlt />
            </button>
            <button type="button" id={styles.countButton}>{quantity}</button>
            <button type="button" id={styles.increaseButton} onClick={increaseCount}>+</button>
        </div>
    )
}