import styles from './Home.module.scss'
import Card from '../Card/Card';

function filterItems(items, searchValue) {
    return items.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
}

function Home({ cards, searchValue, cardsOfCart, setCardsOfCart, isLoading }) {
	const filteredCards = filterItems(cards, searchValue);

    return (
        <div className={styles.home}>
            {(isLoading ? [...Array(8)] : filteredCards).map((item, index) => (
                <Card
                    id={item ? item.id : null} // Проверка на существование item
                    key={index}
                    name={item ? item.name : ''}
                    price={item ? item.price : ''}
                    url={item ? item.url : ''}
                    cards={cards}
                    loading={isLoading} // Передача состояния загрузки в компонент Card
                    cardsOfCart={cardsOfCart}
                    setCardsOfCart={setCardsOfCart}
                />
            ))}
        </div>
    )
}

export default Home