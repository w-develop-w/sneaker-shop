import styles from './Header.module.scss'

function Header({ cart, setCart, cardsOfCart, favorites, setFavorites }) {
    return (
        <header className={styles.header}>
            <i
                className={`${styles.firstIcon} ri-footprint-line`}
                onClick={() => window.location.reload()}
            ></i>
            <h2>Sneaker Shop</h2>
            <div className={styles.iconsContainer}>
                <div>
                    <i
                        onClick={() => {
                            setFavorites(!favorites)
							console.log(favorites)
                        }}
                        className="ri-heart-2-fill"
                    ></i>
                    {cardsOfCart.length !== 0 && (
                        <span className={styles.spanForFavorites}>
                            {cardsOfCart.length}
                        </span>
                    )}
                </div>
                <div>
                    <i
                        onClick={() => {
                            setCart(!cart)
                        }}
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
