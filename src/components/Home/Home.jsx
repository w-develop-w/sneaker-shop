import styles from './Home.module.scss'
import Card from '../Card/Card'

function Home({
    cards,
    searchValue,
    searchRangeValue,
    cardsOfCart,
    setCardsOfCart,
    isLoading,
    cardsOfFavorites,
    setCardsOfFavorites,
    setDataForDescription,
    dataForDescription,
    filters,
    selectedOption,
    setDescription,
}) {

	const filteredCards = filterItems(
		cards,
		getCurrentValueSearch(filters, searchValue, searchRangeValue)
	);
	
	function filterItems(items, searchValue) {
		if (typeof searchValue === 'number') {
			return items.filter((item) => {
				return item.price <= searchValue;
			});
		} else {
			return items.filter((item) => {
				return item.name.toLowerCase().includes(searchValue.toLowerCase());
			});
		}
	}
	
	function getCurrentValueSearch(filters, searchValue, searchRangeValue) {
		if (searchRangeValue === '0') {
			return searchValue;
		}
		if (searchValue === null) {
			return Number(searchRangeValue);
		}
		if(searchRangeValue === '' && searchValue === '') {
			return filters
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
                            description={item ? item.description : ''}
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
