import { BrowserRouter} from "react-router-dom";
import { CartContextProvider } from "./context/CartContext.jsx";
import { AppRouter } from "./router/AppRouter.jsx";

const App = () => {

  return(
    <BrowserRouter>
    
    <CartContextProvider>
      <AppRouter/>
    </CartContextProvider>

    </BrowserRouter>
  )
}

export default App;