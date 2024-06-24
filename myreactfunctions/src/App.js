
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
import UserCreateForm from './components/AllHooks/UserCreateForm';
import Contactlist from './components/Contacts App/contact_List';
import CounterUsingRedux from './components/CounterUsingRedux';
import ContactusingReducer from './components/ContactsUsingReducer';

import All_props from './components/props/All_props';
import UserRecatNode from './components/UsersReactNode';
import UserReactNode from './components/UsersReactNode';
import CarCatalog from './components/Car-Rental-Service';
import Counter from './components/counter'



function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <CarCatalog/> */}

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
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/allhook" element={<AllHooks />}></Route>
          <Route path="/userscrud" element={<UserCrud />}></Route>
          <Route path="/Todo's App" element={<ToDo />}></Route>
          <Route path="/createuser" element={<UserCreateForm />}></Route>
          <Route path="/contactlist" element={<Contactlist />}></Route>
          <Route path="/counterusingreducer" element={<CounterUsingRedux />}></Route>
          <Route path="/contactsusingreducer" element={<ContactusingReducer />}></Route>
          <Route path="/allprops" element={<All_props />}></Route>
          <Route path="/usersreactnode" element={<UserReactNode />}></Route>

          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
