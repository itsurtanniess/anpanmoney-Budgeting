import React from "react";
// import  ReactDOM from "react-dom/client";
import * as ReactDOMClient from 'react-dom/client';
import App from "./components/App";

// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
  
//   )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<App />);


