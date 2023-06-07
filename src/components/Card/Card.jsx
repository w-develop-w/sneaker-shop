import ContentLoader from "react-content-loader"
import styles from "./Card.module.scss"

function Card({ id, name, price, url, cards, cardsOfCart, setCardsOfCart, loading }) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const addToCart = (obj) => {
        setCardsOfCart([...cardsOfCart, obj])
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
            <button
              onClick={() => {addToCart(cards.find((item) => item.id === id)); scrollToTop(); }}>
                Add in cart
            </button>
        </div>
    )
}

export default Card
