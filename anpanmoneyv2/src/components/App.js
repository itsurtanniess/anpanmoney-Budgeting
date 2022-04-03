import React from "react"
import { Container } from "react-bootstrap"
import AuthProvider from "../context/AuthContext"
import Signup from "./Signup"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home"
import Signin from "./Signin"


function App() {
  return (
  <AuthProvider>
    <Container 
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh"}}
    >
    <div className="w-100" style={{ maxWidth: "400px" }}>
      <Router> 
        <AuthProvider> 
          <Switch>
            <Route exact path ="/" component ={Home} />
            <Route path ="/signup" component ={Signup} />
            <Route path ="/signin" component ={Signin} />
          </Switch>
        </AuthProvider>

      </Router>
      <Signup/>
    </div>
    </Container>
  </AuthProvider>
  )

}
export default App;
