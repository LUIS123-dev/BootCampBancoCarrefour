import React from "react"
import ReactDOM from "react-dom"
import Button from './Button'
import ComponenteA from './ComponenteA'
import ComponenteB from './ComponenteB'
import "./styles.css"

function soma(a, b) {
  alert(a + b)
}

function App() {
  return (
    <div className="App">
      Hello World
      <Button onClick={() => soma(10, 20)} name="Luis" />
    <ComponenteA>
        <ComponenteB>
            <Button onClick={() => soma(40, 20)} name="Fernando" />
        </ComponenteB>
    </ComponenteA>
    
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)