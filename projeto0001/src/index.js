import React from "react"
import ReactDOM from "react-dom"
import "../src/styles.css"

function sum(a,b){
    return a +b 
}

function primeiroJSX(){
    return(
        <div className = "teste">
            Luís Fernando - Introdução ao ReactJS
            <h1>soma: {sum(10,20)}</h1>
        </div>
    )
}

const App = () => {

    return (
        <div className ="App">
            {primeiroJSX()}
            
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App/>, rootElement)