import React from 'react'
import './App.scss'
import Cart from './Cart/Cart'
import Header from './Header/Header'
import Home from './Home/Home'
import Card from './Card/Card'
import Search from './Search/Search'


function App() {
    const [cart, setCart] = React.useState(false)

    return (
        <div className="App">
            <Header cart={cart} setCart={setCart} />
			<Search/>
			<Home/>
            {cart && <Cart cart={cart} setCart={setCart} />}
        </div>
    )
}

export default App
