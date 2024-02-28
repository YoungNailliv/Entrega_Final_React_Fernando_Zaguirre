import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./layout/Navbar/Navbar";
import ItemListContainer from "./pages/ItemsListContainer/ItemListContainer.jsx";
import { Cart } from "./pages/Cart.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Landing } from "./pages/Landing.jsx";
import { Item } from "./pages/Item.jsx";
import { Footer } from "./layout/Footer.jsx";

const App = () => {

  return(
    <BrowserRouter>
      <header className="bg-color-base " >
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element= { <Landing/> } />
        <Route path="/shop/:category" element= { <ItemListContainer/> } />
        <Route path="/cart" element = { <Cart/> } />
        <Route path="/contact" element = { <Contact/> } />
        <Route path="/item/:id" element = { <Item/> } />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;