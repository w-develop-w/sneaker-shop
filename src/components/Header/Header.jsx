import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

function Header({ cart, setCart, cardsOfCart }) {
    return (
        <header className={styles.header}>
            <Link className={styles.links} to="/">
                <i className={`${styles.firstIcon} ri-home-3-fill`}></i>
            </Link>

            <h2>Sneaker Shop</h2>
            <div className={styles.iconsContainer}>
                <Link className={styles.links} to="/favorites">
                    <div className={styles.iconContent}>
                        <i className="ri-heart-2-fill"></i>
                        {cardsOfCart.length !== 0 && (
                            <span className={styles.spanForFavorites}>
                                {cardsOfCart.length}
                            </span>
                        )}
                    </div>
                </Link>
				
                <div
                    onClick={() => {
                        setCart(!cart)
                    }}
                    className={styles.iconContent}
                >
                    <i
                        className={`${styles.secondIcon} ri-shopping-cart-fill`}
                    ></i>
                    {cardsOfCart.length !== 0 && (
                        <span className={styles.spanForCart}>
                            {cardsOfCart.length}
                        </span>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
