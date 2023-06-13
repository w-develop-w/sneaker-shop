import styles from './Favorites.module.scss'
import Card from '../Card/Card'

function Favorites({
    setCardsOfFavorites,
    cardsOfFavorites,
    setDataForDescription,
    cards,
    cardsOfCart,
    setCardsOfCart,
    isLoading,
    dataForDescription,
    selectedOption,
    setDescription,
}) {
	document.body.style.overflowY = 'scroll'

    return (
        <div className={styles.container}>
            <div className={styles.containerDiv}>
                <h2>Favorites: {cardsOfFavorites.length} </h2>
                <button
                    className={styles.clearAll}
                    onClick={() => {
                        setCardsOfFavorites([])
                        localStorage.setItem(
                            'favoritesItems',
                            JSON.stringify([])
                        )
                    }}
                >
                    Clear all
                </button>
            </div>
            <div className={styles.cardsOfFavorites}>
                {cardsOfFavorites.length === 0 && (
                    <h3>Your favorites is empty</h3>
                )}
                {cardsOfFavorites.map((item, index) => (
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
                ))}
            </div>
        </div>
    )
}

export default Favorites
