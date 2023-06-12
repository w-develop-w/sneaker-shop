import React, { useState } from 'react'
import styles from './Filters.module.scss'

function Filters({ setFilters }) {
    const [activeItem, setActiveItem] = useState('')

    function handleItemClick(event) {
        const itemText = event.target.textContent
        setFilters(itemText)
        setActiveItem(itemText)
    }

    return (
        <div className={styles.filtersContainer}>
            <ul className={styles.filtersList}>
                <li
                    onClick={handleItemClick}
                    className={`${styles.filterItem} ${
                        activeItem === 'Puma' ? styles.filterItemActive : ''
                    }`}
                >
                    Puma
                </li>
                <li
					onClick={handleItemClick}
                    className={`${styles.filterItem} ${
                        activeItem === 'Nike' ? styles.filterItemActive : ''
                    }`}
                >
                    Nike
                </li>
                <li
					onClick={handleItemClick}
                    className={`${styles.filterItem} ${
                        activeItem === 'Adidas' ? styles.filterItemActive : ''
                    }`}
                >
                    Adidas
                </li>
                <li
					onClick={handleItemClick}
                    className={`${styles.filterItem} ${
                        activeItem === 'New Balance' ? styles.filterItemActive : ''
                    }`}
                >
                    New Balance
                </li>
            </ul>
        </div>
    )
}

export default Filters
