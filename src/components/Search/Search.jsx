import styles from './Search.module.scss'

function Search({ searchValue, setSearchValue }) {
    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <div className={styles.search}>
            <h2>Search </h2>
            <input
                type="text"
                placeholder="Find some..."
                value={searchValue}
                onChange={onChangeSearchInput}
            />
        </div>
    )
}

export default Search
