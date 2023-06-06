import styles from './Header.module.scss'

function Header() {
    return (
        <div className={styles.header}>
            <h2>Sneaker Shop</h2>
            <i className="ri-shopping-cart-fill"></i>
        </div>
    )
}

export default Header