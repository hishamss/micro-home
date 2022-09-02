import React from "react";
import ReactDOM from "react-dom";
import GlobalHeader from "./common/header"
import Footer from "./common/footer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from 'reports/Main';
import Home from './Home'
import { Toolkit} from "@uitk/react";

import "./index.css";

const App = () => (
  <Toolkit appId="@uitk/react-starter-kit">
  <BrowserRouter>
    <div className="container">
      <GlobalHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reports" element={<Main />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      
      <Footer />
    </div>
  </BrowserRouter>
  </Toolkit>
);
ReactDOM.render(<App />, document.getElementById("app"));
