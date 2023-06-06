import styles from './Header.module.scss'

function Header({cart, setCart}) {
    return (
        <div className={styles.header}>
            <h2>Sneaker Shop</h2>
            <i onClick={() => {
				setCart(!cart)
			}} className="ri-shopping-cart-fill"></i>
        </div>
    )
}

export default Header