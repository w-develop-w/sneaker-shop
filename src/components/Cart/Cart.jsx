import styles from "./Cart.module.scss"
import { useEffect } from "react"

function Cart({ cardsOfCart, cart, setCart }) {
    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.cart}>
                <div>
                    <h2>Cart</h2>
                    <i
                        onClick={() => {
                            setCart(!cart)
                        }}
                        className="ri-close-circle-line"
                    ></i>
                </div>

                <div className={styles.cards}>
                    {cardsOfCart.map(item => (
                        <div className={styles.card}>
                            <img src={item.url} alt="Img" />
                            <div>
                                <h3>{item.name}</h3>
                                <h3>{item.price}$</h3>
                            </div>
                            <i className="ri-close-fill"></i>
                        </div>
                    ))}
                </div>

                <h3 className={styles.priceTitle}>Total: 120$</h3>
                <button
                    onClick={() => {
                        setCart(!cart)
                    }}
                >
                    Order
                </button>
            </div>
        </div>
    )
}

export default Cart
