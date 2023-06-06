import styles from './Search.module.scss'

function Search({ length }) {
    return (
        <div className={styles.search}>
            <h2>All count of shoes: {length}</h2>
            <input type="text" placeholder="Find some..." />
        </div>
    )
}

export default Search
