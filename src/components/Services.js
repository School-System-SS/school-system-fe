import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import { BsHeart } from "react-icons/bs";
import "../styles/Services.css"
export default function Services(){
    return(
        <section id='services'>
            <h3>Services</h3>
            
                <Container className="services" >
                    
            
                    
                        <Card border="light" style={{ width: '16rem' }} >
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted"><BsHeart/></Card.Subtitle>
                            <Card.Title>Bus</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                    
                
                    
                
                    <Card border="light" style={{ width: '16rem' }}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted"><BsHeart/></Card.Subtitle>
                        <Card.Title>Bus</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        
                    </Card.Body>
                    </Card>
                    
                        <Card border="light" style={{ width: '16rem' }} >
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted"><BsHeart/></Card.Subtitle>
                            <Card.Title>Bus</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                    
                        <Card border="light" style={{ width: '16rem' }} >
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted"><BsHeart/></Card.Subtitle>
                            <Card.Title>Bus</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                   
                </Container>
        
        
                
            
            
            
                
        </section >
    )
}