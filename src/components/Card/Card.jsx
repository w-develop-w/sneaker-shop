import ContentLoader from 'react-content-loader'
import { Link } from 'react-router-dom'
import styles from './Card.module.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Card({
    id,
    name,
    price,
    url,
    cards,
    cardsOfCart,
    setCardsOfCart,
    loading,
    setCardsOfFavorites,
    cardsOfFavorites,
    setDataForDescription,
    dataForDescription,
    selectedOption,
    setDescription,
}) {
    const [currencyPrice, setCurrencyPrice] = useState(0)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const addToCart = (obj) => {
        setCardsOfCart([...cardsOfCart, obj])
        var cartItems = localStorage.getItem('cartItems')

        if (!cartItems) {
            cartItems = []
        } else {
            cartItems = JSON.parse(cartItems)
        }

        cartItems.push(obj)

        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }

    const addToFavorites = (obj) => {
        if (cardsOfFavorites.some((item) => item.id === obj.id)) {
            return
        }

        setCardsOfFavorites([...cardsOfFavorites, obj])
        var favoritesItems = localStorage.getItem('favoritesItems')

        if (!favoritesItems) {
            favoritesItems = []
        } else {
            favoritesItems = JSON.parse(favoritesItems)
        }

        favoritesItems.push(obj)

        localStorage.setItem('favoritesItems', JSON.stringify(favoritesItems))
    }

    const setDataDescToLocal = (url, name, price) => {
        const updatedData = [url, name, price]
        setDataForDescription(updatedData)
        localStorage.setItem('dataForDescription', JSON.stringify(updatedData))
    }

    useEffect(() => {
        const storedData = localStorage.getItem('dataForDescription')
        if (storedData) {
            setDataForDescription(JSON.parse(storedData))
        }
    }, [])

    useEffect(() => {}, [dataForDescription])

    useEffect(() => {
        let isMounted = true // Флаг, указывающий на то, что компонент монтирован

        async function getCurrencyValue(price, selectedOption) {
            if (selectedOption === 'USD' || selectedOption === '') {
                setCurrencyPrice(price)
            } else {
                try {
                    const currencyValue = await axios.get(
                        `https://api.frankfurter.app/latest?amount=${price}&from=USD&to=${localStorage.getItem(
                            'selectedOption'
                        )}`
                    )
                    if (isMounted) {
                        setCurrencyPrice(
                            currencyValue.data.rates[selectedOption]
                        )
                    }
                } catch (error) {
                    // Обработка ошибки
                    // console.error(error)
                }
            }
        }

        getCurrencyValue(price, selectedOption)

        return () => {
            isMounted = false // Устанавливаем флаг в false при размонтировании компонента
        }
    }, [price, selectedOption])

    return loading ? (
        <div className={styles.card}>
            <ContentLoader
                speed={4}
                width={250}
                height={280}
                viewBox="0 0 250 280"
                backgroundColor="#f5f4f4"
                foregroundColor="#e0e0e0"
            >
                <rect x="61" y="14" rx="0" ry="0" width="129" height="131" />
                <rect x="43" y="152" rx="0" ry="0" width="165" height="31" />
                <rect x="102" y="210" rx="0" ry="0" width="50" height="30" />
                <rect x="62" y="247" rx="16" ry="16" width="130" height="28" />
            </ContentLoader>
        </div>
    ) : (
        <div className={styles.card}>
            <img src={url} alt="" />
            <h4>{name}</h4>
            <div>
                <span>
                    <strong>{currencyPrice}</strong> {selectedOption}
                </span>
            </div>
            <div className={styles.btnsContainer}>
                {/* <Link to={`/${String(name).replace(/\s/g, '')}`}> */}
                <Link to="/about">
                    <button
                        className={styles.addInBuy}
                        onClick={() => {
                            setDataDescToLocal(url, name, price)
                            setDescription(true)
                        }}
                    >
                        Buy
                    </button>
                </Link>
                <i
                    onClick={() => {
                        addToFavorites(cards.find((item) => item.id === id))
                        scrollToTop()
                    }}
                    className={`ri-heart-2-fill ${styles.addInFavorite}`}
                ></i>
                <i
                    onClick={() => {
                        addToCart(cards.find((item) => item.id === id))
                        scrollToTop()
                    }}
                    className={`ri-shopping-cart-fill ${styles.addInCart}`}
                ></i>
            </div>
        </div>
    )
}

export default Card
