import styles from "./Card.module.scss"

function Card({name, price, url}) {

    return (
        <>
            <div className={styles.card}>
                <img src={url} alt="" />
                <h4> {name}</h4>

                <div>
                    <h5>{price}$</h5>
                </div>
                <button>Add in cart</button>
            </div>
        </>
    )
}

export default Card
