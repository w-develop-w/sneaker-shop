import ContentLoader from 'react-content-loader'
import styles from './Card.module.scss'
// import { useState } from 'react'

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
    setDescription, 
    setDataOfCard
}) {
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
			return; 
		}
	
		setCardsOfFavorites([...cardsOfFavorites, obj]);
		var favoritesItems = localStorage.getItem('favoritesItems');
	
		if (!favoritesItems) {
			favoritesItems = [];
		} else {
			favoritesItems = JSON.parse(favoritesItems);
		}
	
		favoritesItems.push(obj);
	
		localStorage.setItem('favoritesItems', JSON.stringify(favoritesItems));
	}

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
                <h5>{price}$</h5>
            </div>
            <div className={styles.btnsContainer}>
                <button className={styles.addInBuy} onClick={() => {setDescription(true); setDataOfCard([url, name, price])}}>Buy</button>
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
