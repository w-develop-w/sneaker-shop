import React from 'react'
import './App.scss'
import Cart from './Cart/Cart'
import Header from './Header/Header'

function App() {
    const [cart, setCart] = React.useState(true)

    return (
        <div className="App">
            {cart ? (
                <Header cart={cart} setCart={setCart} />
            ) : (
                <Cart cart={cart} setCart={setCart} />
            )}
        </div>
    )
}

export default App