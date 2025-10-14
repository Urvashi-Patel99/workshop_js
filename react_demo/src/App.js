import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {

  const [count,setcount]=useState(0)

  return (
    <div className="App">
      
          <h1>Hello Urvashi</h1>
          <button onClick={()=>setcount(count+1)}>add</button>
          <p>{count}</p>
        
    </div>
  );
}

export default App;
