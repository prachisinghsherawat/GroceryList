import { Grocery } from "./grocery"

export const GroceryList = ({groceries,deleteIs}) =>{

    return(
        <div className="list">
            {groceries.title} <button id="btn" onClick={ () =>{deleteIs(groceries.id)}}>Remove</button>
        </div>
    )
}