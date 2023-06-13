import { Link } from "react-router-dom"
import styles from "./Description.module.scss"
import { useEffect, useState } from 'react'
import axios from 'axios'

function Description({ dataOfCard, setOrder, selectedOption }) {
    const data1 = localStorage.getItem("dataForDescription")
    const data2 = JSON.parse(data1)
    // console.log(dataOfCard)

	// value for calculate current price with selected currency
    const [currencyValue, setCurrencyValue] = useState(0)
	useEffect(() => {
        async function getCurrencyValue(selectedOption) {
            if (selectedOption === 'USD' || selectedOption === '') {
                setCurrencyValue(1)
            } else {
                const currencyValue = await axios.get(
                    `https://api.frankfurter.app/latest?amount=1&from=USD&to=${localStorage.getItem(
                        'selectedOption'
                    )}`
                )
                setCurrencyValue(currencyValue.data.rates[selectedOption])
            }
        }
        getCurrencyValue(selectedOption)
    }, [currencyValue, selectedOption])



    return (
        <div className={styles.container}>
            <div className={styles.containerForClose}>
                <Link to="/" className={styles.iconLink}>
                    <i
                        className={`ri-close-circle-line close ${styles.closeIcon}`}
                    ></i>
                </Link>
            </div>

            <div className={styles.description}>
                <div className={styles.leftPart}>
                    <div className={styles.imageWrapper}>
                        <img src={data2[0]} alt="Img" />
                    </div>
                </div>

                <div className={styles.rightPart}>
                    <h2>{data2[1]}</h2>
                    <p>
                        {data2[3]}
                    </p>
                </div>
            </div>

            <div className={styles.buy}>
                <h2>{Math.round((data2[2] * currencyValue),1)} {selectedOption}</h2>
                <Link to="/order">
                    <button
                        onClick={() => {
                            setOrder("description")
                        }}
                    >
                        ORDER
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Description

