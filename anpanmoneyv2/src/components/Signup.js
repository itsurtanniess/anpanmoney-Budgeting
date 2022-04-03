import React, {useRef} from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import img1 from "./images/logo.png";

export default function Signup() {
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const occupationRef = useRef()
    const purchasefRef = useRef()
    const mbdugetRef = useRef()


  return (
    <>
       
        <center>
        <img src={img1} alt="" width="190" length="290"/>
        <hr width="100%"></hr>
        </center>
        <Card>
            <Card.Body>
                <h2 className = "text-center mb-4">REGISTER</h2>
                <Form>
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
                    <Form.Select ref={passwordRef} required>
                        <option value =""></option>
                        <option value ="student">Student</option>
                        <option value ="employed">Employed</option>
                        <option value ="unemployed">Unemployed</option>
                    </Form.Select>
                    
                    </Form.Group>
                    <Form.Group id ="purchasef">
                    <Form.Label>Purchase Frequency: </Form.Label>
                    <Form.Select ref={passwordRef} required>
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
                    <Button className= "w-100 mt-4" type="submit">Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className = "w-100 text-center mt-2">
            Already have an account? Login
        </div>
        
    </>
  )
}
