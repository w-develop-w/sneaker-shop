import styles from "./Thanks.module.scss"

function Thanks({ setThanks }) {
    return (
        <div className={styles.container}>
            <div className={styles.thanks}>
                <div className={styles.close}>
                    <i className="ri-close-circle-line" onClick={() => setThanks(false)}></i>
                </div>
                <h2>Thank you for your order!</h2>
                <h3>
                    Within 5 minutes, a manager will <br /> dial you to confirm
                    the order
                </h3>
            </div>
        </div>
    )
}

export default Thanks
