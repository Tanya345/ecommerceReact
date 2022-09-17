import { createContext, useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Store from './components/Store';

export const AppContext = createContext(null)

function App() {
  const [addToCart, setAddToCart] = useState(false)
	const [cartItems, setCartItems] = useState([])

  return (
    <AppContext.Provider value={{addToCart,setAddToCart,cartItems,setCartItems}}>
      <div className="App">
        {addToCart ? <Cart/>
        :<Store/>}
      </div>
    </AppContext.Provider>
  );
}

export default App;
