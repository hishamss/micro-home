import React from "react";
import ReactDOM from "react-dom";
import Header from "./common/header"
import Footer from "./common/footer";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Main from 'reports/Main';
import Home from './Home'
import "./index.css";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reports" element={<Main />} />
        <Route path="/*" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  </BrowserRouter>

);
ReactDOM.render(<App />, document.getElementById("app"));
