import styles from './Search.module.scss'

function Search({ length, searchValue, onChangeSearchInput }) {
    return (
        <div className={styles.search}>
            <h2>All count of shoes: {length}</h2>
            <input type="text" placeholder="Find some..." value={searchValue} onChange={onChangeSearchInput} />
        </div>
    )
}

export default Search
