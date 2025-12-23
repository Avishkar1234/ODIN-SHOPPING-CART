import { useEffect, useState } from "react"
import styles from "./CartContainer.module.css"
import AddToCart from "../ShoppingCart/AddCart"

export default function CartContainer( { number=20 } ) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getCart = async function() {
            try {
                const res = await fetch(`https://fakestoreapi.com/products?limit=${number}`)
                const data = await res.json()
                
                setProducts(data)
            } catch (error) {
                throw new Error
            }
        }
        getCart()
    }, [])

    return (
        <>
            <div className={styles.container}>
                {products.map((product) => (
                    <div key={product.id} className={styles.cartContainer}>
                        <img src={product.image} alt={product.title} />
                        <p>Title: {product.title}</p>
                        <p>Description: {product.description}</p>
                        <p>Price: {product.price}</p>
                        <p>Rating: {product.rating.rate}</p>
                        <AddToCart />
                    </div>
            ))}
            </div>
        </>
    )
}