import styles from './Home.module.scss'
import Card from '../Card/Card'

function Home({ cards }) {
    return (
        <div className={styles.home}>
            {cards.map((item) => (
                <Card
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    url={item.url}
                />
            ))}
        </div>
    )
}

export default Home
