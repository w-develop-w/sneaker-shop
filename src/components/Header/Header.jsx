import styles from './Header.module.scss'

function Header({ cart, setCart, cardsOfCart }) {
    return (
        <header className={styles.header}>
            <i
                className={`${styles.firstIcon} ri-footprint-line`}
                onClick={() => window.location.reload()}
            ></i>
            <h2>Sneaker Shop</h2>
            <div>
                <i
                    onClick={() => {
                        setCart(!cart)
                    }}
                    className={`${styles.secondIcon} ri-shopping-cart-fill`}
                ></i>
				{
					cardsOfCart.length !== 0 && <span>{cardsOfCart.length}</span>
				}
				
            </div>
        </header>
    )
}

export default Header
