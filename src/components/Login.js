import React, {useRef}           from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import {v4 as uuidV4 }          from 'uuid';

function Login({onIdSubmit}) {
    const idRef = useRef();

    function handleSubmit(e) {
        e.preventDefault()
        console.log(idRef.current)
        onIdSubmit(idRef.current)
    }

    function createNewId(){
        onIdSubmit(uuidV4())
    }

    return (
        <Container className="align-items-center d-flex" style={{height: '100vh'}}>
            <Form onSubmit={handleSubmit} className='w-100'>
                <Form.Group className={'mb-2'}>
                    <Form.Label>
                        Enter Your ID
                    </Form.Label>
                    <Form.Control type={"text"} ref={idRef} required/>
                </Form.Group>
                <Button type='submit' className="me-2">Login</Button>
                <Button onClick={createNewId}  variant='secondary'>Create a new Id</Button>
            </Form>
        </Container>
    )
}

export default Login
