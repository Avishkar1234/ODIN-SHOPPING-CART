import { useEffect, useState } from "react"
import styles from "./CartContainer.module.css"
import AddToCart from "../ShoppingCart/AddCart"

export default function CartContainer({ 
    number = 20, 
    onAdd, 
    onRemove,
    cartOnly = false, 
    cartItems = {} 
}) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getCart = async function() {
            try {
                const res = await fetch(`https://fakestoreapi.com/products?limit=${number}`)
                const data = await res.json()
                setProducts(data)
            } catch (error) {
                console.error("Failed to fetch products:", error)
            }
        }
        getCart()
    }, [number])

    // Filter products based on cartOnly prop
    const visibleProducts = cartOnly
        ? products.filter(p => cartItems[p.id])
        : products;

    return (
        <div className={styles.container}>
            {visibleProducts.map((product) => (
                <div key={product.id} className={styles.cartContainer}>
                    <img src={product.image} alt={product.title} />
                    <p>Title: {product.title}</p>
                    <p>Description: {product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>Rating: {product.rating.rate}</p>
                    <AddToCart 
                        product={product} 
                        onAdd={onAdd}
                        onRemove={onRemove}
                        quantity={cartItems[product.id] || 0}
                    />
                </div>
            ))}
        </div>
    )
}