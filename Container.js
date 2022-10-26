import React, {useState} from "react"
import GroceryList from "./components/GroceryList"
import ShoppingCart from "./components/ShoppingCart"


function Container() {
    const [groceryItems, setGroceryItems] = useState([
        {id: 1, title: "Cauliflower"},
        {id: 2, title: "Legumes"},
        {id: 3, title: "Zucchini"},
        {id: 4, title: "Broccoli"}
    ],)
    const [shoppingListItems, setShoppingListItems] = useState([

    ])

    // function onItemClick(item) {
    //     setGroceryItems()

    // }

    return (
        <div>
            <GroceryList
                groceryItemst = {groceryItems}
            />
            <ShoppingCart
                shoppingListItems = {shoppingListItems}
            />
        </div>
    )
}

export default Container