import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import React, { useEffect } from 'react'

function Header({
    cart,
    setCart,
    cardsOfCart,
    cardsOfFavorites,
    selectedOption,
    setSelectedOption,
}) {
    const handleSelectChange = (event) => {
        const value = event.target.value
        setSelectedOption(value)
        localStorage.setItem('selectedOption', value) // Сохраняем выбранное значение в localStorage
    }

    useEffect(() => {
        const storedValue = localStorage.getItem('selectedOption')
        if (storedValue) {
            setSelectedOption(storedValue) // Устанавливаем сохраненное значение из localStorage
        }
    }, [])

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link className={styles.links} to="/">
                    <i className={`${styles.firstIcon} ri-home-3-fill`}></i>
                </Link>

                <h2>Sneaker Shop</h2>

                <div className={styles.iconsContainer}>
                    {
                        <select
                            value={selectedOption}
                            onChange={handleSelectChange}
                        >
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="CZK">CZK</option>
                            <option value="CAD">CAD</option>
							<option value="PLN">PLN</option>
                        </select>
                    }

                    <Link className={styles.links} to="/favorites">
                        <div className={styles.iconContent}>
                            <i className="ri-heart-2-fill"></i>
                            {cardsOfFavorites.length !== 0 && (
                                <span className={styles.spanForFavorites}>
                                    {cardsOfFavorites.length}
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
        </div>
    )
}

export default Header
