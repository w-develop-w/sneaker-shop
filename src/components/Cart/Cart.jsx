import { useEffect } from "react"
import axios from "axios"
import styles from "./Cart.module.scss"

function Cart({ cardsOfCart, cart, setCart, setCardsOfCart }) {
    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [])

    const delFromCart = (obj) => {
        const index = cardsOfCart.findIndex((item) => item.id === obj.id)
        if (index !== -1) {
            const updatedCards = [...cardsOfCart]
            updatedCards.splice(index, 1)
            setCardsOfCart(updatedCards)
        }
        axios.delete(
            `https://6478d572362560649a2e842a.mockapi.io/cardsOfCart/${obj.id}`
        )
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.cart}>
                <div>
                    <h2>
                        Cart: {cardsOfCart.length !== 0 && cardsOfCart.length}
                    </h2>
                    <i
                        onClick={() => {
                            setCart(!cart)
                        }}
                        className="ri-close-circle-line"
                    ></i>
                </div>

                <div className={styles.cards}>
                    {cardsOfCart.length === 0 && (
                        <h3 className={styles.emptyTitle}>
                            Your cart is empty
                        </h3>
                    )}
                    {cardsOfCart.length !== 0 &&
                        cardsOfCart.map((item, index) => (
                            <div className={styles.card} key={index}>
                                <img src={item.url} alt="img" />
                                <div>
                                    <h3>{item.name}</h3>
                                    <h3>{item.price}$</h3>
                                </div>
                                <i
                                    onClick={() => delFromCart(item)}
                                    className="ri-close-fill"
                                ></i>
                            </div>
                        ))}
                </div>

                <h3 className={styles.priceTitle}>
                    Total:{" "}
                    {cardsOfCart.reduce((acc, item) => acc + item.price, 0)}$
                </h3>
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
