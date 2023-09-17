import { useState } from "react"
import AddItem from "./components/AddItem"

import Navbar from "./components/NavBar"
import ShoppingCart from "./components/ShoppingCart"
import { Provider } from "react-redux"
import store from '../src/store'


const App = () => {
  const [toggled1, setToggled1] = useState(false)
  const [toggled2, setToggled2] = useState(true)

  const handleNavBar = () => {
    setToggled1(!toggled1)
    setToggled2(!toggled2)
  }
  const handleProduct = () => {
    setToggled2(!toggled2)
    setToggled1(!toggled1)
  }
  return (
    <Provider store={store}>
      <div>
        <Navbar
          handleNavBar={handleNavBar}
          handleProduct={handleProduct}
        ></Navbar>
        <div className={`${toggled2 ? "" : "hidden"}`}>
          <AddItem></AddItem>
        </div>
        <div className={`${toggled1 ? "" : "hidden"}`}>
          <ShoppingCart></ShoppingCart>
        </div>
      </div>
    </Provider>
  )
}

export default App
