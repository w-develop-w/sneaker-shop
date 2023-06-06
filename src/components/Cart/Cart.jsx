import styles from './Cart.module.scss'

function Cart () {

    return (
        <>
            <div className={styles.cart}>
                <h2>Корзина</h2>
                <img src="/" alt="" />

                <h3>Итого: 5 000 грн</h3>
                <button>Оформить заказ</button>
            </div>

        </>
    )
}

export default Cart