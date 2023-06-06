import styles from "./Cart.module.scss"

function Cart() {
    return (
        <div className={styles.container}>
            <div className={styles.cart}>
                <div>
                    <h2>Корзина</h2>
                    <i className="ri-close-circle-line"></i>
                </div>

                <h3>Итого: 5 000 грн</h3>
                <button>Оформить заказ</button>
            </div>
        </div>
    )
}

export default Cart
