import React, { useEffect, useState } from 'react'
import { addition, division, multiply, subtraction } from './calculations';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondnumber] = useState(0);
  const [kind, setKind] = useState();
  const [answer, setAnswer] = useState();

  const changeFirst = (value) => {
    setFirstNumber(value);
  }

  const changeSecond = (value) => {
    setSecondnumber(value);
  }

  const reset = () => {
    setFirstNumber(0)
    setSecondnumber(0)
    setAnswer()
  }

  const getAddition = () => {
      setAnswer(addition(firstNumber, secondNumber))
  }

  const getDivison = () => {
      setAnswer(division(firstNumber, secondNumber))
  }
  
  const getSubtraction = () => {
      setAnswer(subtraction(firstNumber, secondNumber))
  }

  const getMultiply = () => {
      setAnswer(multiply(firstNumber, secondNumber))
  }

  const showAnswer = () => {
    if(answer == undefined){
      return ''
    } else if(answer == 0){
      return 'Svaret är 0'
    } else {
      return 'Svaret är ' + answer
    }
  }

  return (
    <>
    <div id="calculator-container">
      <input name='first' alt='input' className="number-input" type='number' value={firstNumber} onChange={(e) => {changeFirst(e.target.value)}}></input>
      <div id="button-container">
        <button name='add' onClick={getAddition}>+</button>
        <button name='subtract' onClick={getSubtraction}>-</button>
        <button name='multiply' onClick={getMultiply}>*</button>
        <button name='divide' onClick={getDivison}>&divide;</button></div>
      <input name='second' alt='input' className='number-input' type='number' value={secondNumber} onChange={(e) => {changeSecond(e.target.value)}}></input><br/>
    </div>
      <h1 class="answer">{showAnswer()}</h1>
      <button name='reset' onClick={reset}>Reset</button>
    </>
  )
}

export default Calculator
