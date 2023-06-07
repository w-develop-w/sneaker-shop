import styles from './Home.module.scss'
import Card from '../Card/Card'

function Home({ cards, cardsOfCart, setCardsOfCart }) {
    return (
        <div className={styles.home}>
            {cards.map((item) => (
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
