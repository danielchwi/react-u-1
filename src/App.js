import './App.css';
import { useState } from 'react'

const App= () =>  {
  const [name, setName] = useState('Mario')

  const changeName = () => {
    setName('Luigi')
    console.log(name)
  }

  return (
    <div className="App">
      <h1>Hallo my name is {name}</h1>
      <button onClick={changeName} >click</button>
    </div>
  );
}

export default App;
