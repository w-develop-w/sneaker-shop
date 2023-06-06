import React, { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import "./App.scss"
import Cart from "./Cart/Cart"
import Header from "./Header/Header"
import Home from "./Home/Home"
import Card from "./Card/Card"
import Search from "./Search/Search"

function App() {
    const [cart, setCart] = useState(false)
    // cards - массив с карточками
    const [cards, setCards] = useState([])

    useEffect(() => {
        axios.get(
            "https://6478d572362560649a2e842a.mockapi.io/cards"
        )
        .then((res) => {
        setCards(res.data)
        })

    }, [])

    console.log(cards)

    return (
        <div className="App">
            <Header cart={cart} setCart={setCart} />
            <Search />
            <Home cards={cards} />
            {cart && <Cart cart={cart} setCart={setCart} />}
        </div>
    )
}

export default App
