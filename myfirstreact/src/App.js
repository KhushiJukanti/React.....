import logo from './logo.svg';
import './App.css';
// import CourseRegistration from './MyReact/CourseRegistration';


import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from './MyReact/pages/Home';
// import Aboutus from './MyReact/pages/About';

import NavBar from './MyReact/pages/Navbar';
import Employees from './MyReact/pages/Employees';
import ContactsRegisterApp from './MyReact/pages/ContactsRegisterApp';


function App() {
  return (
    <div className="App">



      {/* <CourseRegistration /> */}
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
        {/* <ul>
      <li>
        <Link to="home">Home</Link>
        <Link to="aboutus">Aboutus</Link>
        <Link to="contactus">Contactus</Link>
      </li>
    </ul> */}
        <NavBar />
        <Routes>
          <Route path="home" element={<Home />}></Route>
          <Route path="employees" element={<Employees />}></Route>
          <Route path="contatcsregisterapp" element={<ContactsRegisterApp/>}></Route>
          {/* <Route path="courses" element={<Courses />}></Route>
          <Route path="counterexample" element={<Counter />}></Route>
          <Route path="lifecycle" element={<LifecycleDemo />}></Route>
          <Route path="lifecyclexample" element={<Lifecycle1 />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
