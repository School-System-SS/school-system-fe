import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons';
import "../styles/ContactUs.css"
import React from "react";
import Container from "react-bootstrap/Container";


export default function ContactUs(){
    
    return(
        <section id="contactUs">

        <h3>Contact Us</h3>
        <Container className="cont" >
        <div className='icons'>
            <span  ><SocialIcon url="https://twitter.com" /></span>
            
            <span ><SocialIcon url="https://facebook.com"/></span>
            
            <span ><SocialIcon url="https://instagram.com" /></span>
            
            <span ><SocialIcon url="https://linkedin.com" /></span>
            
            
            
            

        </div>

        <div className='separator'>
                or
        </div>
        <div >
                <Form className='form'>
                <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="name" placeholder="Full Name" />
                </Form.Group>
                
            

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="name" placeholder="Email" />  
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicSubject">
                    <Form.Control type="subject" placeholder="Subject" />  
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" placeholder="Message Area" rows={5} />
                </Form.Group>
            <button className="submitButton" type="submit">Submit</button>
            </Form>
            </div>

        
            {/* <Form className="col-10 offset-10 col-lg-10 offset-lg-4 div-wrapper justify-content-center align-items-center">
 
               <Col xs={5}>
                <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="name" placeholder="Full Name" />
                </Form.Group>
                </Col>
                
                <Col xs={5}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />  
                </Form.Group>
                </Col>
                
                <Col xs={5}>
                <Form.Group className="mb-3" controlId="formBasicSubject">
                    <Form.Control type="subject" placeholder="Subject" />  
                </Form.Group>
                </Col>
                
                <Col xs={5}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" placeholder="Message Area" rows={5} />
                </Form.Group>
                </Col>
                
                <Button className="btn btn-default col-sm-5" variant="primary" type="submit" >
                    Submit
                </Button>
                
            </Form>
        */}
        </Container>
        </section>
       
    )
}