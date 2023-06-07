import styles from './Card.module.scss'

function Card({ id, name, price, url, addToCart, cards }) {
    return (
        <>
            <div className={styles.card}>
                <img src={url} alt="" />
                <h4> {name}</h4>

                <div>
                    <h5>{price}$</h5>
                </div>
                <button
                    onClick={() =>
                        addToCart(cards.find((item) => item.id === id))
                    }
                >
                    Add in cart
                </button>
            </div>
        </>
    )
}

export default Card
