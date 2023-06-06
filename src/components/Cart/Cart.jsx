import styles from './Cart.module.scss'
import { useEffect } from 'react'

function Cart({ cart, setCart }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
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
                    <div className={styles.card}>

                        <img src="img/image5.jpg" alt="hehe" />
                        <div>
                            <h3>Nike Air Max 270</h3>
                            <h3>160$</h3>
                        </div>
                        <i className="ri-close-circle-line"></i>
                    </div>
                </div>

                <h3>Total: 120$</h3>
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
