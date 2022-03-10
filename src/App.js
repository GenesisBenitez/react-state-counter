import React from 'react';
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
     <Counter initialCount = {10} onIncrement={onCounterIncrement} />
     <Counter initialCount = {20} onIncrement={onCounterIncrement} />
     <Counter initialCount = {30} onIncrement={onCounterIncrement} />
    </div>
  );
}

function onCounterIncrement(countValue){
  console.log(`Incremented Values: ${countValue}`)
}

export default App;
