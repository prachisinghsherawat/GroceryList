import { useState } from "react"
import { GroceryInput } from "./groceryInput"
import { GroceryList } from "./groceryList"
import { nanoid } from "nanoid"

export const Grocery = () =>{

    const [groceries,setGroceries] = useState([])

    const addGrocery = (data)=>{

        let res = {
            id : nanoid(),
            title : data,

        }
        setGroceries([...groceries,res])

    }

    function deleteIs(id){

        let newGroceries = groceries.filter( (el) => (el.id !== id))
        setGroceries([...newGroceries])
    }

    return(
        <div>
            <GroceryInput addGrocery={addGrocery}/>
            {groceries.map( (el) => (<GroceryList groceries ={el} deleteIs={deleteIs} key={el.id}/>))}
        </div>
    )
}