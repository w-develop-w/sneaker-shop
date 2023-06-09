import { Link } from "react-router-dom"
import styles from "./Favorites.module.scss"
import stylesCard from "../Card/Card.module.scss"

function Favorites({
    cards,
    setCardsOfFavorites,
    cardsOfFavorites,
    cardsOfCart,
    setCardsOfCart,
    setDataOfCard, 
    setDescription
}) {
    document.body.style.overflowY = "scroll"

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    const addToCart = (obj) => {
        setCardsOfCart([...cardsOfCart, obj])
        var cartItems = localStorage.getItem("cartItems")

        if (!cartItems) {
            cartItems = []
        } else {
            cartItems = JSON.parse(cartItems)
        }

        cartItems.push(obj)

        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }

    const delFromFavorites = (obj) => {
        const index = cardsOfFavorites.findIndex((item) => item.id === obj.id)
        if (index !== -1) {
            const updatedCardsOfFavorites = [...cardsOfFavorites]
            updatedCardsOfFavorites.splice(index, 1)
            setCardsOfFavorites(updatedCardsOfFavorites)
        }

        let favoritesItems = localStorage.getItem("favoritesItems")

        if (favoritesItems) {
            favoritesItems = JSON.parse(favoritesItems)

            favoritesItems.splice(index, 1)

            localStorage.setItem(
                "favoritesItems",
                JSON.stringify(favoritesItems)
            )
        }
    }

    return (
        <div className={styles.container}>
            <div>
                <h2>Favorites: {cardsOfFavorites.length} </h2>
                <button
                    className={styles.clearAll}
                    onClick={() => {
                        setCardsOfFavorites([])
                        localStorage.setItem(
                            "favoritesItems",
                            JSON.stringify([])
                        )
                    }}
                >
                    Clear all
                </button>
            </div>
            <div className={styles.cardsOfFavorites}>
                {cardsOfFavorites.length === 0 && (
                    <h3>Your favorites is empty</h3>
                )}
                {cardsOfFavorites.map((item, index) => (
                    <div className={stylesCard.card}>
                        <img src={item.url} alt="" />
                        <h4>{item.name}</h4>
                        <div>
                            <h5>{item.price}$</h5>
                        </div>
                        <div className={stylesCard.btnsContainer}>
                            {/* <button className={stylesCard.addInBuy}>Buy</button> */}
                            <Link to={`/${String(item.name).replace(/\s/g, "")}`} >
                                <button
                                    className={stylesCard.addInBuy}
                                    onClick={() => {
                                        setDescription(true)
                                        setDataOfCard([item.url, item.name, item.price])
                                    }}
                                >
                                    Buy
                                </button>
                            </Link>
                            <i
                                onClick={() => {
                                    delFromFavorites(item)
                                    scrollToTop()
                                }}
                                className={`ri-heart-2-fill ${stylesCard.addInFavorite}`}
                            ></i>
                            <i
                                onClick={() => {
                                    addToCart(item)
                                    scrollToTop()
                                }}
                                className={`ri-shopping-cart-fill ${stylesCard.addInCart}`}
                            ></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Favorites
