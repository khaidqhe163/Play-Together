import React, { useState } from 'react'
import { Col, Container, Row, Form } from 'react-bootstrap'
import LoginLeft from './LoginLeft'
import { useNavigate } from 'react-router-dom'
import '../css/register.css'
import axios from 'axios'
function Register() {
    const nav = useNavigate();
    const [pwRule, setPwRule] = useState([]);

    const handleCheckPwRule = (e) => {
        const value = e.target.value;
        const pwRules = [];
        if (value.length >= 8 && !pwRules.includes(1)) {
            pwRules.push(1);
        }
        if (/[A-Z]/.test(value) && !pwRules.includes(4)) {
            pwRules.push(4);
        }
        if (/[.%$?]/.test(value) && !pwRules.includes(2)) {
            pwRules.push(2);
        }
        if (/\d/.test(value) && !pwRules.includes(3)) {
            pwRules.push(3);
        }
        setPwRule(pwRules);
        console.log(value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    return (
        <Container fluid>
            <Row>
                <LoginLeft />
                <Col md={6} id='login-rightside'>
                    <div id='login-header'>
                        <button onClick={() => { nav('/login') }}>Sign in</button>
                        <div id='login-close'>
                            <ion-icon name="close-outline"></ion-icon>
                        </div>
                    </div>
                    <div id='formRegister'>
                        <h1>Register</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formUserName">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="email" placeholder="Enter username" />
                            </Form.Group>
                            <div className='pw-rule'>
                                {
                                    !pwRule.includes(1) ? (
                                        <ion-icon style={{ color: "red", fontSize: "20px" }} name="close-outline"></ion-icon>
                                    ) : (
                                        <ion-icon style={{ color: "green", fontSize: "20px" }} name="checkmark-outline"></ion-icon>
                                    )
                                }
                                <span>contains at least 8 characters</span>
                            </div>
                            <div className='pw-rule'>
                                {
                                    !pwRule.includes(2) ? (
                                        <ion-icon style={{ color: "red", fontSize: "20px" }} name="close-outline"></ion-icon>
                                    ) : (
                                        <ion-icon style={{ color: "green", fontSize: "20px" }} name="checkmark-outline"></ion-icon>
                                    )
                                }
                                <span>contains at least 1 of the following special characters ? . $ %</span>
                            </div>
                            <div className='pw-rule'>
                                {
                                    !pwRule.includes(3) ? (
                                        <ion-icon style={{ color: "red", fontSize: "20px" }} name="close-outline"></ion-icon>
                                    ) : (
                                        <ion-icon style={{ color: "green", fontSize: "20px" }} name="checkmark-outline"></ion-icon>
                                    )
                                }
                                <span>contains at least 1 number</span>
                            </div>
                            <div className='pw-rule'>
                                {
                                    !pwRule.includes(4) ? (
                                        <ion-icon style={{ color: "red", fontSize: "20px" }} name="close-outline"></ion-icon>
                                    ) : (
                                        <ion-icon style={{ color: "green", fontSize: "20px" }} name="checkmark-outline"></ion-icon>
                                    )
                                }
                                <span>contains at least one capital letter</span>
                            </div>
                            <Form.Group className="mb-3" controlId="formPassword" onChange={handleCheckPwRule}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formCFPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>
                            <button id='login-submit'>
                                Submit
                            </button>
                        </Form>
                        <p style={{ textAlign: "center", color: "white", marginTop: "30px" }}>or continue with</p>
                        <div id='login-alter'>
                            <button>
                                <ion-icon name="logo-google"></ion-icon>
                            </button>
                            <button>
                                <ion-icon name="logo-facebook"></ion-icon>
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Register
