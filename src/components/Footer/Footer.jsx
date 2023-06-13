import styles from './Footer.module.scss'

function Footer () {

    return (
        <div className={styles.container}>
            <i className="ri-copyright-line"></i>
            <h5>All rights reserved</h5>
        </div>
    )
}

export default Footer