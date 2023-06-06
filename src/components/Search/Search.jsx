import styles from'./Search.module.scss'

function Search() {
	return (
		<div className={styles.search}>
			<h2>All count of shoes: 0</h2>
			<input type="text" placeholder='Find some...'/>
		</div>
	)
}

export default Search