import { createContext, useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Store from './components/Store';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ThankYou from './components/ThankYou';

export const AppContext = createContext(null)

function App() {
  // const [addToCart, setAddToCart] = useState(false)
  const [cartItems, setCartItems] = useState([])

  return (
    <AppContext.Provider value={{ cartItems, setCartItems }}>
      <Router>
        <Routes>
        <Route exact path="/" element={<Store />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/thankyou" element={<ThankYou />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;

//  <div>
// {addToCart ? <Cart/>
// :<Store/>}
// </div>