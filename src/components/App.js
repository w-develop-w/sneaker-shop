import './App.scss'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cart from './Cart/Cart'
import Header from './Header/Header'
import Home from './Home/Home'
import Search from './Search/Search'

function App() {
    // state for render modal window
    const [cart, setCart] = useState(false)
    // cards - array with cards
    const [cards, setCards] = useState([])
    // cardsOfCart - array with cards for cart
    const [cardsOfCart, setCardsOfCart] = useState([])
    //  searchValue - переменная для храния данных которые ввел пользователь
    // в поле инпут - поиск
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        axios
            .get('https://6478d572362560649a2e842a.mockapi.io/cards')
            .then((res) => {
                console.log(res)
                setCards(res.data)
            })
    }, [])

    // useEffect(() => {
    //     axios
    //         .get('https://6478d572362560649a2e842a.mockapi.io/cardsOfCart')
    //         .then((res) => {
    //             setCardsOfCart(res.data)
    //         })
    // }, [])


    return (
        <div className="App">
            <Header cart={cart} setCart={setCart} cardsOfCart={cardsOfCart} />
            <Search
                searchValue={searchValue}
				setSearchValue={setSearchValue}
            />
            <Home
                cards={cards}
                searchValue={searchValue}
                cardsOfCart={cardsOfCart}
                setCardsOfCart={setCardsOfCart}
            />
            {cart && (
                <Cart
                    cart={cart}
                    setCart={setCart}
                    cardsOfCart={cardsOfCart}
                    setCardsOfCart={setCardsOfCart}
                />
            )}
        </div>
    )
}

export default App
