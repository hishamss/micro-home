import React from "react";
import ReactDOM from "react-dom";
import GlobalHeader from "./common/header"
import Footer from "./common/footer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const RemoteComponent = React.lazy(() => {import('reports/Main')});
import Home from './Home'
import { Toolkit} from "@uitk/react";
import ErrorBoundary from "./ErrorBoundary";

import "./index.css";

const App = () => (
  <Toolkit appId="@uitk/react-starter-kit">
  <BrowserRouter>
    <div className="container">
      <GlobalHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reports" element={
        <React.Suspense fallback={<p>Loading remote component</p>}>
          <ErrorBoundary module="Remote Component">
          <RemoteComponent />
          </ErrorBoundary>
          
          </React.Suspense>
        } />
        <Route path="/*" element={<Home />} />
      </Routes>
      
      <Footer />
    </div>
  </BrowserRouter>
  </Toolkit>
);
ReactDOM.render(<App />, document.getElementById("app"));
