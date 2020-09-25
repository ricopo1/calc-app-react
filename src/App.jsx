/* eslint no-eval: 0 */ // Ignora el warning de usar eval()
import React, { useState } from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css'

const App = () => {
    
    const [stack, setStack] = useState("")
    const checkIsNegative = value => Math.sign(value)===-1?true:false
    const items = words(stack, checkIsNegative(stack)?/[^+^*^/]+/g:/[^-^+^*^/]+/g)
    const value = items.length > 0 ? items[items.length-1] : "0"
  
    return (
    <main className='react-calculator'>
        <Result value={value}/>
        <Numbers onClickNumber={number => setStack(`${stack}${number}`)}/>
        <Functions 
            onContentClear={() => setStack('')} 
            onDelete={() => {
                if(stack.length > 0 ) {
                    const newStack = stack.substring(0, stack.length-1)
                    setStack(newStack)
                }
            }}
        />
        <MathOperations 
            onClickOperation={operation => {
                if(stack.length > 0) {
                    const operationExist = stack[stack.length-1].match(/[+*/-]/g)
                    if(operationExist) setStack(`${stack.replace(stack[stack.length-1], operation)}`)
                    else setStack(`${stack}${operation}`)
                } else if(operation === "-") {
                    setStack(`${operation}${stack}`)
                }
            }} 
            onClickEqual={equal => {
                try {
                    setStack(eval(stack).toString())
                } catch (err) {
                    alert(err)
                    setStack('')
                }
            }}
        />
    </main>)
}

export default App