import styles from "./Developers.module.scss"

function Developers() {
    return (
        <div className={styles.container}>
            <div className={styles.developers}>
                <h2>Developers:</h2>

                <div>
                    <div className={styles.developer}>
                        <h3>David Voronianskiy</h3>
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/david_voronyanskiy" target="_blank">
                                    <i className="ri-instagram-line"></i>
                                </a>
                            </li>

                            <li>
                                <a href="https://t.me/Ddsonq" target="_blank">
                                    <i className="ri-telegram-line"></i>
                                </a>
                            </li>

                            <li>
                                <a href="https://github.com/dread-man" target="_blank">
                                    <i className="ri-github-line"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.developer}>
                        <h3>Danil Padashulia</h3>
                        <ul className={styles.sociaNetworks}>
                            <li className={styles.sociaNetwork}>
                                <a href="https://www.instagram.com/danil_padashulia" target="_blank">
                                    <i className="ri-instagram-line"></i>
                                </a>
                            </li>

                            <li className={styles.sociaNetwork}>
                                <a href="https://t.me/d_a_n_i_l_03" target="_blank">
                                    <i className="ri-telegram-line"></i>
                                </a>
                            </li>

                            <li className={styles.sociaNetwork}>
                                <a href="https://github.com/w-develop-w" target="_blank">
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
