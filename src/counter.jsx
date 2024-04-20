import { useState } from 'react';
import propTypes from 'prop-types';

export const CounterApp=({value})=>{

console.log('render')
  const [counter,setCounter] =useState(value);
  const  haddled=()=>{

   // setCounter(counter +1);
   setCounter(counter+1);
  }
  const haddledrest=()=>setCounter(counter-1);    


  const reset=()=>setCounter(10);

    return(
        <>
          <h1>{counter}</h1>
          <button onClick={haddled}>+1</button>
          <button  onClick={haddledrest}>-1</button>
          <button  onClick={reset}>Reset</button>
        </>
        )

}

CounterApp.propTypes ={
 counter:propTypes.number.isRequired,
}