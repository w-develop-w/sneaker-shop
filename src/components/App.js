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
import Filters from "./Filters/Filters"
import OrderFromDescription from "./OrderFromDescription/OrderFromDescription"
import Thanks from "./Thanks/Thanks"
import Developers from "./Developers/Developers"
import Footer from "./Footer/Footer"

function App() {
    // state for render modal window
    const [cart, setCart] = useState(false)
    // cards - array with cards
    const [cards, setCards] = useState([])
    // cardsOfCart - array with cards for cart
    const [cardsOfCart, setCardsOfCart] = useState([])

    const [cardsOfFavorites, setCardsOfFavorites] = useState([])
    //  searchValue - переменная для храния данных которые ввел пользователь в поле инпут - поиск
    const [searchValue, setSearchValue] = useState('')

	const [searchRangeValue, setSearchRangeValue] = useState('')

    // в зависимости от значения  isLoading решаем показывать карточки товаров на главной или  же процесс загрузки
    const [isLoading, setIsLoading] = useState(true)
    // description - состояние для отображения страницы с описанием к товару

    const [description, setDescription] = useState(true)

    const [dataForDescription, setDataForDescription] = useState([])
    // filters - состояние для получения текстового значения кнопки фильтра
    const [filters, setFilters] = useState('')

    const [selectedOption, setSelectedOption] = useState('USD')

    const [dataOfCard, setDataOfCard] = useState([])

    // Состояние для определения - какая именно кнопка заказа - из описаниея или из корзины
    const [order, setOrder] = useState('')

    // Состояние - открыта или закрыто модальное окно благодарности
    const [thanks, setThanks] = useState(false)

    const [color, setColor] = useState(localStorage.getItem("colorTheme"))

    useEffect(() => {
        document.documentElement.style.setProperty("--base-color", color)
    }, [color])

    useEffect(() => {
        let cartItems = localStorage.getItem('cartItems')
        let favoritesItems = localStorage.getItem('favoritesItems')
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
                'https://6478d572362560649a2e842a.mockapi.io/cards'
            )

            setIsLoading(false)
            setCards(itemsResponse.data)
        }

        fetachData()
    }, [])

	console.clear()
    return (
        <div className="App">
            <div>
                <Header
                    cart={cart}
                    setCart={setCart}
                    cardsOfCart={cardsOfCart}
                    cardsOfFavorites={cardsOfFavorites}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                    color={color}
                    setColor={setColor}
                />

            <Routes>
                <Route
                    path="/"
                    exact
                    element={
                        <>
                            <Filters setFilters={setFilters} setSearchRangeValue={setSearchRangeValue} setSearchValue={setSearchValue}/>
                            <Search
								cards={cards}
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
								searchRangeValue={searchRangeValue}
								setSearchRangeValue={setSearchRangeValue}
								selectedOption={selectedOption}
                            />
                            <Home
                                cards={cards}
                                searchValue={searchValue}
                                searchRangeValue={searchRangeValue}
                                isLoading={isLoading}
                                cardsOfCart={cardsOfCart}
                                setCardsOfCart={setCardsOfCart}
                                setCardsOfFavorites={setCardsOfFavorites}
                                cardsOfFavorites={cardsOfFavorites}
                                setDataForDescription={setDataForDescription}
                                dataForDescription={dataForDescription}
								filters={filters}
                                setDescription={setDescription}
								selectedOption={selectedOption}
                            />
                            {cart && (
                                <Cart
                                    cart={cart}
                                    setCart={setCart}
                                    cardsOfCart={cardsOfCart}
                                    setCardsOfCart={setCardsOfCart}
                                    setOrder={setOrder}
                                    selectedOption={selectedOption}
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
                                setDataOfCard={setDataOfCard}
                                setDescription={setDescription}
								setDataForDescription={setDataForDescription}
                                searchValue={searchValue}
                                isLoading={isLoading}
                                dataForDescription={dataForDescription}
								filters={filters}
								selectedOption={selectedOption}
                            />
                            {cart && (
                                <Cart
                                    cart={cart}
                                    setCart={setCart}
                                    cardsOfCart={cardsOfCart}
                                    setCardsOfCart={setCardsOfCart}
                                    setOrder={setOrder}
                                    selectedOption={selectedOption}
                                />
                            )}
                        </>
                    }
                />

                <Route
                    // path={`/${String(dataForDescription[1]).replace(
                    //     /\s/g,
                    //     ''
                    // )}`}
                    path="/about"
                    exact
                    element={
                        <>
                        {description && (
                                <Description
                                    dataOfCard={dataOfCard}
                                    setOrder={setOrder}
									selectedOption={selectedOption}
                                />
                            )}
                            {cart && (
                                <Cart
                                    cart={cart}
                                    setCart={setCart}
                                    cardsOfCart={cardsOfCart}
                                    setCardsOfCart={setCardsOfCart}
                                    selectedOption={selectedOption}
                                />
                            )}
                        </>
                    }
                />
                <Route
                    path="/order"
                    exact
                    element={
                        <>
                            <OrderFromDescription cardsOfCart={cardsOfCart} order={order} dataForDescription={dataForDescription} setThanks={setThanks} />
                            {cart && (
                                <Cart
                                    cart={cart}
                                    setCart={setCart}
                                    cardsOfCart={cardsOfCart}
                                    setCardsOfCart={setCardsOfCart}
                                    setOrder={setOrder}
                                    selectedOption={selectedOption}
                                />
                            )}
                        </>
                    }
                />
            </Routes>

                {thanks && <Thanks setThanks={setThanks} />}
            </div>
			<Developers/>
            <Footer />
        </div>
    )
}

export default App
