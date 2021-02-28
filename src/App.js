import logo from './logo.svg';
import './App.css';
import React,{createContext, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

export const categoryContext=createContext()

function App() {
  const [value, setvalue] = useState(0)
  return (
    <categoryContext.Provider value={[value, setvalue]} >

      <div className="App">
       <h1>How to work contestAPI</h1>
          <h4>App:{value}</h4>
        <Header value={value} setvalue={setvalue} />
        <Shop />
      </div>
    </categoryContext.Provider>
  );
}

export default App;
