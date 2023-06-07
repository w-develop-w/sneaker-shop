import styles from "./Home.module.scss"
import Card from "../Card/Card"

function Home({ cards, addToCart, searchValue, isLoading }) {
    const filteredItems = cards.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
    )

    return (
        <div className={styles.home}>
            {(isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
                <Card
                    id={item ? item.id : null} // Проверка на существование item
                    key={index}
                    name={item ? item.name : ''}
                    price={item ? item.price : ''}
                    url={item ? item.url : ''}
                    addToCart={addToCart}
                    cards={cards}
                    loading={isLoading} // Передача состояния загрузки в компонент Card
                />
            ))}
        </div>
    )
}

export default Home
