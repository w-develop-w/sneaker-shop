import styles from './Home.module.scss'
import Card from '../Card/Card'

function filterItems(items, searchValue) {
    return items.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
    )
}

function Home({
    cards,
    searchValue,
    cardsOfCart,
    setCardsOfCart,
    isLoading,
    cardsOfFavorites,
    setCardsOfFavorites,
    setDataForDescription,
    dataForDescription,
	filters,
	selectedOption,
    setDescription
}) {
    const filteredCards = filterItems(cards, getCurrentValueSearch(searchValue, filters))

	function getCurrentValueSearch(searchValue, filters) {
		if(searchValue === '') {
			return filters
		} else {
			return searchValue
		}
	}

    return (
        <div>
            <h2>All count of sneakers: {filteredCards.length}</h2>
            <div className={styles.home}>
                {(isLoading ? [...Array(8)] : filteredCards).map(
                    (item, index) => (
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
                            setDataForDescription={setDataForDescription}
                            dataForDescription={dataForDescription}
							selectedOption={selectedOption}
                            setDescription={setDescription}
                        />
                    )
                )}
            </div>
        </div>
    )
}

export default Home
