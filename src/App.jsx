import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./pages/ItemsListContainer/ItemListContainer.jsx";
import { Cart } from "./pages/Cart.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Landing } from "./pages/Landing.jsx";
import { Layout } from "./layout/Layout.jsx";
import { Error404 } from "./pages/Error404.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";
import { Item } from "./pages/Item.jsx";
import { Checkout } from "./pages/Checkout.jsx";

const App = () => {

  return(
    <BrowserRouter>
    
    <CartContextProvider>
        <Routes>
          <Route element={ <Layout/> }>
            <Route path="/" element= { <Landing/> } />
            <Route path="/shop/:category" element= { <ItemListContainer/> } />
            <Route path="/cart" element = { <Cart/> } />
            <Route path="/contact" element = { <Contact/> } />
            <Route path="/item/:id" element = { <Item/> } />
            <Route path="/checkout" element = { <Checkout/> } />
            <Route path="*" element= {<Error404/>}/>
          </Route>
        </Routes>
    </CartContextProvider>

    </BrowserRouter>
  )
}

export default App;