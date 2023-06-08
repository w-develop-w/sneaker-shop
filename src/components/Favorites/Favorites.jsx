import styles from "./Favorites.module.scss"

function Favorites() {
	document.body.style.overflowY = 'scroll'

    return (
        <div className={styles.container}>
            <h2>Favorites: </h2>
        </div>
    )
}

export default Favorites
