import styles from "./Developers.module.scss"

function Developers() {
    return (
        <div className={styles.container}>
            <div className={styles.developers}>
                <h2>Developers:</h2>

                <div>
                    <div className={styles.developer}>
                        <h3>David Voronyanskiy</h3>
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/david_voronyanskiy" target="_blank"  rel="noreferrer">
                                    <i className="ri-instagram-line"></i>
                                </a>
                            </li>

                            <li>
                                <a href="https://t.me/Ddsonq" target="_blank"  rel="noreferrer">
                                    <i className="ri-telegram-line"></i>
                                </a>
                            </li>

                            <li>
                                <a href="https://github.com/dread-man" target="_blank"  rel="noreferrer">
                                    <i className="ri-github-line"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.developer}>
                        <h3>Danil Padashulia</h3>
                        <ul className={styles.sociaNetworks}>
                            <li className={styles.sociaNetwork}>
                                <a href="https://www.instagram.com/danil_padashulia" target="_blank"  rel="noreferrer">
                                    <i className="ri-instagram-line"></i>
                                </a>
                            </li>

                            <li className={styles.sociaNetwork}>
                                <a href="https://t.me/d_a_n_i_l_03" target="_blank"  rel="noreferrer">
                                    <i className="ri-telegram-line"></i>
                                </a>
                            </li>

                            <li className={styles.sociaNetwork}>
                                <a href="https://github.com/w-develop-w" target="_blank"  rel="noreferrer">
                                    <i className="ri-github-line"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Developers
