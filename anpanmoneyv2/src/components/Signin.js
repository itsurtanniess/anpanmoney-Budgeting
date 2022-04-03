import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert} from "react-bootstrap";
import img1 from "./images/logo.png";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom"

export default function Signin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signin } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")
  const navigate = useNavigate()


  async function handleSubmit(e) {
    e.preventDefault();

    try{
        setError("")
        setLoading(true);

        await signin(emailRef.current.value, passwordRef.current.value);
        navigate.push("/")
    }catch{
        setError("Failed to log in")
    }
    setLoading(false);
  }

  return (
    <>
      <center>
        <img src={img1} alt="" width="190" length="290" />
        <hr width="100%"></hr>
      </center>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">REGISTER</h2>
          {error && <Alert variant= "danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email: </Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password: </Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            <Button
              disabled={loading}
              className="shadow bg-brown-400 hover:bg-brown-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full w-100 mt-4"
              type="submit"
            >
              Sign In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account?{" "}
        <Link to= "/signup" className="hover:text-black">
          Register now.
        </Link>
      </div>
    </>
  );
}
