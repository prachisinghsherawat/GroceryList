import { useState } from "react"

export const GroceryInput = ({addGrocery}) => {

    const [text,setText] = useState("");

    return(
        <div className="input">
            <input type="text" placeholder="Enter Here" onChange={ (event) => {

                setText(event.target.value);
            }}/>

            <button id="button1" onClick={()=>{addGrocery(text)}}> Add </button>
        </div>
    )
}