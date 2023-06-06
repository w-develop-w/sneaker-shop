import React from "react"
import "./App.scss"
import Cart from "./Cart/Cart"
import Header from "./Header/Header"

function App() {
    const [cart, setCart] = React.useState(false)

    return (
        <div className="App">
            <Header cart={cart} setCart={setCart} />
            {cart && <Cart cart={cart} setCart={setCart}/>}
        </div>
    )
}

export default App
