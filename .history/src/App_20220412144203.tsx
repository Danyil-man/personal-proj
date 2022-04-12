import { useState } from 'react';
import './App.css';
import Comp from './Comp';

function App() {
  const [num, setNum] = useState(18)
  return (
    <div className="App">
      <Comp num={num} />
    </div>
  );
}

export default App;
