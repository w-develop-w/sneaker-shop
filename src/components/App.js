import "./App.scss"
import React, { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import axios from "axios"
import Cart from "./Cart/Cart"
import Header from "./Header/Header"
import Home from "./Home/Home"
import Search from "./Search/Search"
import Favorites from "./Favorites/Favorites"
import Description from "./Description/Description"

function App() {
    // state for render modal window
    const [cart, setCart] = useState(false)
    // cards - array with cards
    const [cards, setCards] = useState([])
    // cardsOfCart - array with cards for cart
    const [cardsOfCart, setCardsOfCart] = useState([])

    const [cardsOfFavorites, setCardsOfFavorites] = useState([])
    //  searchValue - переменная для храния данных которые ввел пользователь в поле инпут - поиск
    const [searchValue, setSearchValue] = useState("")
    // в зависимости от значения  isLoading решаем показывать карточки товаров на главной или  же процесс загрузки
    const [isLoading, setIsLoading] = useState(true)

    // description - состояние для отображения страницы с описанием к товару
    const [description, setDescription] = useState(false)

    const [dataOfCard, setDataOfCard] = useState([])

    useEffect(() => {
        let cartItems = localStorage.getItem("cartItems")
        let favoritesItems = localStorage.getItem("favoritesItems")
        if (favoritesItems) {
            setCardsOfFavorites(JSON.parse(favoritesItems))
        }

        if (cartItems) {
            setCardsOfCart(JSON.parse(cartItems))
        }
    }, [])

    useEffect(() => {
        async function fetachData() {
            const itemsResponse = await axios.get(
                "https://6478d572362560649a2e842a.mockapi.io/cards"
            )

            setIsLoading(false)
            setCards(itemsResponse.data)
        }

        fetachData()
    }, [])

    return (
        <div className="App">

            <Header
                cart={cart}
                setCart={setCart}
                cardsOfCart={cardsOfCart}
                cardsOfFavorites={cardsOfFavorites}
            />

            <Routes>
                <Route
                    path="/"
                    exact
                    element={
                        <>
                            <Search
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                            />
                            <Home
                                cards={cards}
                                searchValue={searchValue}
                                isLoading={isLoading}
                                cardsOfCart={cardsOfCart}
                                setCardsOfCart={setCardsOfCart}
                                setCardsOfFavorites={setCardsOfFavorites}
                                cardsOfFavorites={cardsOfFavorites}
                                setDescription={setDescription}
                                setDataOfCard={setDataOfCard}
                            />
                            {cart && (
                                <Cart
                                    cart={cart}
                                    setCart={setCart}
                                    cardsOfCart={cardsOfCart}
                                    setCardsOfCart={setCardsOfCart}
                                />
                            )}
                        </>
                    }
                />
                <Route
                    path="/favorites"
                    exact
                    element={
                        <>
                            <Favorites
                                cards={cards}
                                cardsOfFavorites={cardsOfFavorites}
                                setCardsOfFavorites={setCardsOfFavorites}
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
                        </>
                    }
                />


                <Route
                    path={`/${String(dataOfCard[1]).replace(/\s/g, '')}`}
                    exact
                    element={
                        <>
                        {description && <Description dataOfCard={dataOfCard} />}
                        </>
                    }
                />

                
            </Routes>
        </div>
    )
}

export default App
