import { Cart } from "../pages/Cart";
import { Checkout } from "../pages/Checkout";
import { Contact } from "../pages/Contact";
import { Error404 } from "../pages/Error404";
import { Item } from "../pages/Item";
import ItemListContainer from "../pages/ItemListContainer";

import { Landing } from "../pages/Landing";

export const routes = [
    {   
        id:"landing",
        path: "/",
        Element: Landing,
    },
    {   
        id:"shop",
        path: "/shop/:category",
        Element: ItemListContainer,
    },
    {   
        id:"cart",
        path: "/cart",
        Element: Cart,
    },
    {   
        id:"contact",
        path: "/contact",
        Element: Contact,
    },
    {   
        id:"item",
        path: "/item/:id",
        Element: Item,
    },
    {   
        id:"checkout",
        path: "/checkout",
        Element: Checkout,
    },
    {   
        id:"404",
        path: "*",
        Element: Error404,
    },

]