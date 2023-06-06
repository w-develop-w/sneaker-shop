import styles from './Home.module.scss'
import Card from '../Card/Card'


function Home() {
    return (
        <div className={styles.home}>
            <Card></Card>
        </div>
    )
}

export default Home
