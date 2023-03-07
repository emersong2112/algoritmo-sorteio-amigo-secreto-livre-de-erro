import logo from './logo.svg';
import { TagsInput } from "react-tag-input-component";

import './App.css';
import { useState } from 'react';

function App() {
  const [selected, setSelected] = useState([]);
  const [result, setResult] = useState([]);
  const [number, setNumber] = useState(3);

  const generateNumber = () => {
    setResult(selected.sort(() => Math.random() - 0.5).slice(0, number > 0 ? number : selected.length));
  }
  return (
    <div className="App">
      <header className="App-header">
      <TagsInput
        value={selected}
        onChange={setSelected}
        name="names"
        placeHolder="Nomes"
      />
      
      <input type={"number"} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => generateNumber()}>Vai lá</button>
      <ul>
        {result.map((val, key) => <li id={key}>{val}</li>)}
      </ul>


      </header>
    </div>
  );
}

export default App;
