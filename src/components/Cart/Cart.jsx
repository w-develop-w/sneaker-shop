import { Link } from 'react-router-dom'
import styles from './Cart.module.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Cart({
    cardsOfCart,
    cart,
    setCart,
    setCardsOfCart,
    setOrder,
    selectedOption,
}) {
    document.body.style.overflowY = 'scroll'

    const delFromCart = (obj) => {
        const index = cardsOfCart.findIndex((item) => item.id === obj.id)
        if (index !== -1) {
            const updatedCards = [...cardsOfCart]
            updatedCards.splice(index, 1)
            setCardsOfCart(updatedCards)

            let cartItems = localStorage.getItem('cartItems')

            if (cartItems) {
                cartItems = JSON.parse(cartItems)

                cartItems.splice(index, 1)

                localStorage.setItem('cartItems', JSON.stringify(cartItems))
            }
        }
    }
    // value for calculate current price with selected currency
    const [currencyValue, setCurrencyValue] = useState(0)

    useEffect(() => {
        async function getCurrencyValue(selectedOption) {
            if (selectedOption === 'USD' || selectedOption === '') {
                setCurrencyValue(1)
            } else {
                const currencyValue = await axios.get(
                    `https://api.frankfurter.app/latest?amount=1&from=USD&to=${localStorage.getItem(
                        'selectedOption'
                    )}`
                )
                setCurrencyValue(currencyValue.data.rates[selectedOption])
            }
        }
        getCurrencyValue(selectedOption)
    }, [currencyValue, selectedOption])
	
    return (
        <div className={styles.container}>
            <div className={styles.cart}>
                <div>
                    <div>
                        <h2>
                            Cart:
                            {cardsOfCart.length !== 0 && cardsOfCart.length}
                        </h2>
                    </div>
                    <i
                        onClick={() => {
                            setCart(!cart)
                        }}
                        className="ri-close-circle-line"
                    ></i>
                </div>
                <div className={styles.cards}>
                    {cardsOfCart.length === 0 && (
                        <h3 className={styles.emptyTitle}>
                            Your cart is empty
                        </h3>
                    )}
                    {cardsOfCart.length !== 0 &&
                        cardsOfCart.map((item, index) => (
                            <div className={styles.card} key={index}>
                                <img src={item.url} alt="img" />
                                <div>
                                    <h3>{item.name}</h3>
                                    <h3>
                                        {Math.round(
                                            Number(item.price * currencyValue),
                                            1
                                        )}
                                        {selectedOption}
                                    </h3>
                                </div>
                                <i
                                    onClick={() => delFromCart(item)}
                                    className="ri-close-fill"
                                ></i>
                            </div>
                        ))}
                </div>

                <div className={styles.totalContent}>
                    <h3 className={styles.priceTitle}>
                        Total:{' '}
                        {cardsOfCart.reduce(
                            (acc, item) =>
                                acc +
                                Math.round(
                                    Number(item.price * currencyValue),
                                    1
                                ),
                            0
                        )}
                        {'  ' + selectedOption}
                    </h3>
                    <button
                        onClick={() => {
                            setCardsOfCart([])
                            localStorage.setItem(
                                'cartItems',
                                JSON.stringify([])
                            )
                        }}
                    >
                        Clear all
                    </button>
                </div>

                <Link to="/order" className={styles.link}>
                    <button
                        onClick={() => {
                            setCart(!cart)
                            setOrder('cart')
                        }}
                    >
                        Order
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Cart
