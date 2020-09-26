/* eslint no-eval: 0 */ // Ignora el warning de usar eval()
import React, { useState } from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import History from './components/History'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css'

const App = () => {
    
    const [stack, setStack] = useState("")
    const [history, setHistory] = useState("")
    
    const checkIsNegative = value => Math.sign(value)===-1?true:false
    const items = words(stack, checkIsNegative(stack)?/[^+^*^/]+/g:/[^-^+^*^/]+/g)
    const value = items.length > 0 ? items[items.length-1] : "0"
  
    return (
    <main>
        <section className='react-calculator'>
            <Result value={value}/>
            <Numbers onClickNumber={number => {
                setStack(`${stack}${number}`)
                setHistory(`${history}${number}`)
            }}/>
            <Functions 
                onContentClear={() => {
                    setStack('')
                    setHistory('')
                }} 
                onDelete={() => {
                    if(stack.length > 0 ) {
                        const newStack = stack.substring(0, stack.length-1)
                        setStack(newStack)
                        setHistory(newStack)
                    }
                }}
            />
            <MathOperations 
                onClickOperation={operation => {
                    if(stack.length > 0) {
                        const operationExist = stack[stack.length-1].match(/[+*/-]/g)
                        if(operationExist) {
                            const overrideOperation = `${stack.replace(stack[stack.length-1], operation)}`
                            setStack(overrideOperation)
                            setHistory(overrideOperation)
                        }
                        else {
                            setStack(`${stack}${operation}`)
                            setHistory(`${history}${operation}`)
                        }
                    } else if(operation === "-") {
                        setHistory(`${operation}${history}`)
                        setStack(`${operation}${stack}`)
                    }
                }} 
                onClickEqual={equal => {
                    try {
                        setHistory(`${history}=${eval(stack).toString()}`)
                        setStack(eval(stack).toString())
                    } catch (err) {
                        alert(err)
                        setStack('')
                    }
                }}
            />
        </section>
        <History history={history} onClickDeleteHistory={() => setHistory(stack)}/>
    </main>)
}

export default App