import React from "react";
import  ReactDOM from "react-dom/client";
//import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";

// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
  
//   )

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
document.getElementById("root")
);

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App />);

// const container = document.getElementById('root');

// // Create a root.
// const root = ReactDOMClient.createRoot(container);

// // Initial render: Render an element to the root.
// root.render(<App />);


