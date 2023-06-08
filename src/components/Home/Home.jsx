import styles from './Home.module.scss'
import Card from '../Card/Card';

function filterItems(items, searchValue) {
    return items.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
}

function Home({ cards, searchValue, cardsOfCart, setCardsOfCart, isLoading, cardsOfFavorites, setCardsOfFavorites }) {
	const filteredCards = filterItems(cards, searchValue);

    return (
        <div className={styles.home}>
            {(isLoading ? [...Array(8)] : filteredCards).map((item, index) => (
                <Card
                    id={item ? item.id : null}
                    key={index}
                    name={item ? item.name : ''}
                    price={item ? item.price : ''}
                    url={item ? item.url : ''}
                    cards={cards}
                    loading={isLoading} 
                    cardsOfCart={cardsOfCart}
                    setCardsOfCart={setCardsOfCart}
					setCardsOfFavorites={setCardsOfFavorites}
					cardsOfFavorites={cardsOfFavorites}
					
                />
            ))}
        </div>
    )
}

export default Home