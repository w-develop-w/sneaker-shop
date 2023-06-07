import styles from "./Home.module.scss"
import Card from "../Card/Card"

function Home({ cards, addToCart }) {
    return (
        <div className={styles.home}>
            {cards.map((item) => (
                <Card
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    url={item.url}
                    addToCart={addToCart}
                />
            ))}
        </div>
    )
}

export default Home
