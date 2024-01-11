
import './App.css';
import Sum from './Sum';
import ParentIncome from './ParentIncome';
import Sample from './Sample';
import Course from './Course';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom"

import Home from './components/Home';
import NavBar from './components/Navbar';
import AllHooks from './components/AllHooks/AllHooks';
import UserCrud from './components/AllHooks/UserCrud';
import ToDo from './components/Todo';



function App() {
  return (
    <div className="App">

      {/* <Sum/> */}
      {/* <ParentIncome/> */}
      {/* <Sample/> */}
      {/* <Course/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/allhook" element={<AllHooks />}></Route>
          <Route path="/userscrud" element={<UserCrud/>}></Route>
          <Route path="/Todo's App" element={<ToDo/>}></Route>
          {/* <Route path="/" element={<Home />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
