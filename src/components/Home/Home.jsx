import styles from './Home.module.scss'
import Card from '../Card/Card';

function filterItems(items, searchValue) {
    return items.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
}

function Home({ cards, searchValue, cardsOfCart, setCardsOfCart }) {
	const filteredCards = filterItems(cards, searchValue);

    return (
        <div className={styles.home}>
            {filteredCards.map((item) => (
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