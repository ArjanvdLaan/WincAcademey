import React from "react"
import List from "./List"

function GroceryList(props) {
   console.log(props)
    return(
        <div>
            <List
                groceryItems = {props.groceryItems}
            />
        </div>
   ) 
}

export default GroceryList