import styles from './Search.module.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Search({
    searchValue,
    setSearchValue,
    searchRangeValue,
    setSearchRangeValue,
    selectedOption,
    cards,
}) {
    const { minPropertyValue, maxPropertyValue } = cards.reduce(
		(acc, card) => {
		  const propertyValue = card.price;
		  acc.minPropertyValue = Math.min(acc.minPropertyValue, propertyValue);
		  acc.maxPropertyValue = Math.max(acc.maxPropertyValue, propertyValue);
		  return acc;
		},
		{ minPropertyValue: Infinity, maxPropertyValue: -Infinity }
	  );

    const onChangeSearchInput = (event) => {
        setSearchRangeValue('0')
        setSearchValue(event.target.value)
    }

    const onChangeSearchInputRange = (event) => {
        setSearchValue(null)
        setSearchRangeValue(event.target.value)
    }

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
    }, [currencyValue])

    return (
        <div className={styles.search}>
            <h2>Search </h2>
            <div className={styles.searchPrice}>
                <span>
                    {`${Math.round((minPropertyValue * currencyValue),1)} ${selectedOption.toLowerCase()}`}
                </span>
                <input
                    type="range"
                    id="rangeInput"
                    min={minPropertyValue}
                    max={maxPropertyValue}
                    step="10"
                    onChange={onChangeSearchInputRange}
                />
                <span> {`${searchRangeValue === '' ? Math.round((maxPropertyValue * currencyValue),1) : Math.round((searchRangeValue * currencyValue),1)} ${selectedOption.toLowerCase()}`}</span>
            </div>
            <input
                className={styles.inputSearch}
                type="text"
                placeholder="Find some..."
                value={searchValue}
                onChange={onChangeSearchInput}
            />
        </div>
    )
}

export default Search
