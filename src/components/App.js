import './App.scss'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cart from './Cart/Cart'
import Header from './Header/Header'
import Home from './Home/Home'
import Search from './Search/Search'

function App() {
    const [cart, setCart] = useState(false)
    // cards - массив с карточками
    const [cards, setCards] = useState([])
    
    // cardsOfCart - массив с карточками из корзины 
    const [cardsOfCart, setCardsOfCart] = useState([])
    
    useEffect(() => {
        axios
            .get('https://6478d572362560649a2e842a.mockapi.io/cards')
            .then((res) => {
				console.log(res)
                setCards(res.data)
            })
    }, [])


    useEffect(() => {
        axios.get(
            "https://6478d572362560649a2e842a.mockapi.io/cardsOfCart"
        )
        .then((res) => {
        setCardsOfCart(res.data)
        })

    }, [])


    return (
        <div className="App">
            <Header cart={cart} setCart={setCart} />
            <Search length={cards.length}/>
            <Home cards={cards} />
            {cart && <Cart cart={cart} setCart={setCart} />}
        </div>
    )
}

export default App