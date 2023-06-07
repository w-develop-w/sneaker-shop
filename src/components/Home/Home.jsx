import styles from "./Home.module.scss"
import Card from "../Card/Card"

function Home({ cards, searchValue }) {
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
                    cards={cards}
					cardsOfCart={cardsOfCart}
					setCardsOfCart={setCardsOfCart}
                />
            ))}
        </div>
    )
}

export default Home
