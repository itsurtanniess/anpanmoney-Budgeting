import React, {useRef} from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import img1 from "./images/logo.png";

export default function Signup() {
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const mbdugetRef = useRef()


  return (
    <>
        <div>
        <Head>
        <title>Sign Up | Anpanmoney</title>
       </Head>
        <center>
        <img src={img1} alt="" width="190" length="290"/>
        <hr width="100%"></hr>
        </center>
        <Card>
            <Card.Body>
                <h2 className = "text-center mb-4">Signup</h2>
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
                    <Form.Group id ="mbudget">
                    <Form.Label>Monthly Budget: </Form.Label>
                    <Form.Control type = "number" ref={mbdugetRef} required />
                    </Form.Group>
                    <Button className= "w-100 mt-4" type="submit"> Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className = "w-100 text-center mt-2">
            Already have an account? Login
        </div>
        </div>
    </>
  )
}
