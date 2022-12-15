import React from "react"
import "./style.css"

export default function App() {
   //isGoingOut can be true or false
    const[isGoingOut, setIsGoingOut] = React.useState(true)

    function handleClick(){ 
        // setIsGoingOut(prevState => !prevState) 
        //or
        // setIsGoingOut(prevState => prevState ? false:true) 
        //or
        setIsGoingOut(isGoingOut => isGoingOut ? false : true) 
        //or
        // setIsGoingOut(isGoingOut => !isGoingOut) 
    }

    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}
