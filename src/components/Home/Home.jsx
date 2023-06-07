import styles from "./Home.module.scss"
import Card from "../Card/Card"

function Home({ cards, addToCart, searchValue }) {
    const filteredItems = cards.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
    )

    return (
        <div className={styles.home}>
            {filteredItems.map((item) => (
                <Card
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    url={item.url}
                    addToCart={addToCart}
                    cards={cards}
                />
            ))}
        </div>
    )
}

export default Home
