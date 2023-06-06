import styles from './Header.module.scss'

function Header({ cart, setCart }) {
    return (
        <header className={styles.header}>
            <i
                className={`${styles.firstIcon} ri-footprint-line`}
                onClick={() => window.location.reload()}
            ></i>
            <h2>Sneaker Shop</h2>
            <i
                onClick={() => {
                    setCart(!cart)
                }}
                className={`${styles.secondIcon} ri-shopping-cart-fill`}
            ></i>
        </header>
    )
}

export default Header
