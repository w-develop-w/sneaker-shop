import "./App.scss"
import React, { useState, useEffect } from "react"
import axios from "axios"
import Cart from "./Cart/Cart"
import Header from "./Header/Header"
import Home from "./Home/Home"
import Search from "./Search/Search"

function App() {
    // state for render modal window
    const [cart, setCart] = useState(false)
    // cards - array with cards
    const [cards, setCards] = useState([])
    // cardsOfCart - array with cards for cart
    const [cardsOfCart, setCardsOfCart] = useState([])
    //  searchValue - переменная для храния данных которые ввел пользователь
    // в поле инпут - поиск
    const [searchValue, setSearchValue] = useState("")

    // в зависимости от значения  isLoading решаем показывать карточки товаров на главной или  же процесс загрузки
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetachData () {
       
            const itemsResponse = await axios.get("https://6478d572362560649a2e842a.mockapi.io/cards")

            setIsLoading(false)
        
            setCards(itemsResponse.data)
        }

        fetachData ()
    }, [])
   

    const addToCart = (obj) => {
        setCardsOfCart([...cardsOfCart, obj])
    }

    const delFromCart = (obj) => {
        const index = cardsOfCart.findIndex((item) => item.id === obj.id)
        if (index !== -1) {
            const updatedCards = [...cardsOfCart]
            updatedCards.splice(index, 1)
            setCardsOfCart(updatedCards)
        }
    }


    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <div className="App">
            <Header cart={cart} setCart={setCart} cardsOfCart={cardsOfCart} />
            <Search
                length={cards.length}
                searchValue={searchValue}
                onChangeSearchInput={onChangeSearchInput}
            />
            <Home
                addToCart={addToCart}
                cards={cards}
                searchValue={searchValue}
                isLoading={isLoading}
            />
            {cart && (
                <Cart
                    cart={cart}
                    setCart={setCart}
                    cardsOfCart={cardsOfCart}
                    delFromCart={delFromCart}
                />
            )}
        </div>
    )
}

export default App
