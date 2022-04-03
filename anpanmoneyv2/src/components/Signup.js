import React, {useRef, useState} from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import Logo from "./images/logo.png"
import {useAuth} from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const occupationRef = useRef()
    const purchasefRef = useRef()
    const mbdugetRef = useRef()
    const { signup } = useAuth ()
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()

        setLoading(true);
      
        await signup(usernameRef.current.value, emailRef.current.value, passwordRef.current.value)
        navigate.push("/")
      
        setLoading(false);

    }


  return (
    <>
       
        <center>
        <div>
        <img src={Logo} style={{width: '80px', height: '80px'}} alt='react logo' />
        </div>
        <hr width="100%"></hr>
        </center>
        <Card>
            <Card.Body>
                <h2 className = "text-center mb-4">REGISTER</h2>
                <Form onSubmit= {handleSubmit}>
                    <Form.Group id ="username">
                    <Form.Label>Username: </Form.Label>
                    <Form.Control type = "text" ref={usernameRef} required />
                    </Form.Group>

                    <Form.Group id ="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type = "email" ref={emailRef} required />
                    </Form.Group>

                    <Form.Group id ="password">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type = "password" ref={passwordRef} required />
                    </Form.Group>

                    <Form.Group id ="occupation">
                    <Form.Label>Occupation Type: </Form.Label>
                    <Form.Select ref={occupationRef} required>
                        <option value =""></option>
                        <option value ="student">Student</option>
                        <option value ="employed">Employed</option>
                        <option value ="unemployed">Unemployed</option>
                    </Form.Select>
                    
                    </Form.Group>
                    <Form.Group id ="purchasef">
                    <Form.Label>Purchase Frequency: </Form.Label>
                    <Form.Select ref={purchasefRef} required>
                        <option value =""></option>
                        <option value ="low spender">Low Spender</option>
                        <option value ="moderate spender">Average Spender</option>
                        <option value ="high spender">High Spender</option>
                    </Form.Select>
                    
                    </Form.Group>
                    <Form.Group id ="mbudget">
                    <Form.Label>Monthly Budget: </Form.Label>
                    <Form.Control type = "number" ref={mbdugetRef} required />
                    </Form.Group>
                    <Button disabled={loading} className= "shadow bg-brown-400 hover:bg-brown-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full w-100 mt-4" type="submit">Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className = "w-100 text-center mt-2">
            Already have an account? {" "}
                  <Link to="/signin" className="hover:text-black">
                    Login
                  </Link>
        </div>
        
    </>
  )
}
