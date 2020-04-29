// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import MediaQuery from 'react-responsive'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Register.component";
import SignUp from "./components/signup.component";
import CounselorInfo from "./components/CounselorInfo";

function App() {
  return (<Router>
    <div className="App">
      <nav className=" navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <h4><b>Join our Network of Top Expert Child and Parent Counselors!</b></h4>
          {/* <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link> */}
          {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>

      <div className="BackNav">
      <nav className=" navbar-expand-lg navbar-dark fixed-top">
        <div className="Darkcontainer">
      <a href="#">&#x3c;<span></span>Back</a>
      </div>
</nav>
      </div>

      {/* <div className="auth-wrapper"> */}
      
        <div>
          {/* <Switch> */}
          
            <Route exact path='/' component={Login} />
         
            {/* <Route path="/sign-in" component={Login} /> */}
            {/* <Route path="/sign-up" component={SignUp} /> */}
          {/* </Switch> */}
        </div>
      </div>
      
      {/* <div className="info-wrapper">
      <div className="CInfo">
      <Route exact path='/' component={CounselorInfo} />
      </div> */}
     {/* </div> */}
    {/* </div> */}
    </Router>
  );
}

export default App;