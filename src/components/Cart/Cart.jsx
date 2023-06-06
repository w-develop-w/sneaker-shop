import styles from "./Cart.module.scss"

function Cart({ cart, setCart }) {
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

                <div className={styles.cards}>
                    <div className={styles.card}>

                        <img src="img/image5.jpg" alt="hehe" />
                        <div>
                            <h3>Мужские Кроссовки Nike Air Max 270</h3>
                            <h3>4 000 грн</h3>
                        </div>
                        <i className="ri-close-circle-line"></i>
                    </div>
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
