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
// import MediaQuery from 'react-responsive'
// import firebase from 'firebase';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Upload from "./deleteupload"
// import Login from "./Pages/Counselors";
import Counselors from "./Pages/Counselors";
// import Activists from "./Pages/Activists";

// import SignUp from "./components/signup.component";
// import CounselorInfo from "./components/CounselorInfo";

function App() {
  return (<Router>
    <div className="App">
        <Switch>
          {/* <Route path="/activities" component={Activists} />{" "} */}
          <Route path="/" component={Counselors} />{" "}
        </Switch>{" "}
      </div>{" "}
      
     
    </Router>
  );
}

export default App;
