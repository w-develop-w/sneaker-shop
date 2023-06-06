import styles from './Cart.module.scss'
import { useEffect } from 'react'

function Cart({ cart, setCart }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'scroll'
        }
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.cart}>
                <div>
                    <h2>Корзина</h2>
                    <i
                        onClick={() => {
                            setCart(!cart)
                        }}
                        className="ri-close-circle-line"
                    ></i>
                </div>

                <h3>Итого: 5 000 грн</h3>
                <button
                    onClick={() => {
                        setCart(!cart)
                    }}
                >
                    Оформить заказ
                </button>
            </div>
        </div>
    )
}

export default Cart
