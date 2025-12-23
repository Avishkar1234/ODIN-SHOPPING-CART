import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import styles from "./AddCart.module.css"

export default function AddToCart() {
    const [count, setCount] = useState(0)

    const increaseCount = () => setCount(prevCount => prevCount + 1)

    const decreaseCount = () => setCount(prevCount => prevCount - 1)

    if (count === 0) {
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
            <button type="button" id={styles.countButton}>{count}</button>
            <button type="button" id={styles.increaseButton} onClick={increaseCount}>+</button>

        </div>
    )
}