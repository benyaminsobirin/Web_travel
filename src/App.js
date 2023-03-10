import React from "react";
import { Router, Route, } from "react-router-dom";

import 'asset/scss/style.scss';
import landingPages from "pages/landingPages";


function App() {
  return <div className="App">
    <Router>
      <Route path="/" component={landingPages}></Route>
    </Router>
    </div>;
}

export default App;
