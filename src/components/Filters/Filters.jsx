import React, { useState } from 'react'
import styles from './Filters.module.scss'

function Filters({ setFilters, setSearchRangeValue, setSearchValue }) {
    const [activeItem, setActiveItem] = useState('')

    function handleItemClick(event) {
        setSearchValue('')
        setSearchRangeValue('')
        const itemText = event.target.textContent

        // Проверяем, был ли элемент уже выбран
        if (activeItem === itemText) {
            // Сбрасываем все активные стили
            setActiveItem('')
            setFilters('')
        } else {
            // Обновляем фильтры и активный элемент
            setFilters(itemText)
            setActiveItem(itemText)
        }
    }

    return (
        <div className={styles.filtersContainer}>
            <ul className={styles.filtersList}>
                <li
                    onClick={handleItemClick}
                    className={`${styles.filterItem} ${
                        activeItem === 'New Balance'
                            ? styles.filterItemActive
                            : ''
                    }`}
                >
                    New Balance
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
                        activeItem === 'Puma' ? styles.filterItemActive : ''
                    }`}
                >
                    Puma
                </li>
                <li
                    onClick={handleItemClick}
                    className={`${styles.filterItem} ${
                        activeItem === 'Stone Island' ? styles.filterItemActive : ''
                    }`}
                >
                    Stone Island
                </li>
                <li onClick={handleItemClick}>
                    <i className="ri-close-circle-line"></i>
                </li>
            </ul>
        </div>
    )
}

export default Filters
