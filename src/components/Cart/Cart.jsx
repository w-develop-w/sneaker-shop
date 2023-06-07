import styles from "./Cart.module.scss"
import { useEffect } from "react"

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
                        cardsOfCart.map((item) => (
                            <div className={styles.card}>
                                <img src={item.url} alt="hehe" />
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
                    Total:{' '}
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
