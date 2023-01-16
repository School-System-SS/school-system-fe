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
                            <Card.Img variant="top" src="https://crlabinstallations.co.uk/wp-content/uploads/slider/cache/e066c2038482938430d2ded7a8b73ac1/Commercial-Lab-Installation-1.webp" />
                            <Card.Title>Commercial Laboratories</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                    
                
                    
                
                    <Card border="light" style={{ width: '16rem' }}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted"><BsHeart/></Card.Subtitle>
                        <Card.Img variant="top" src="https://crlabinstallations.co.uk/wp-content/uploads/slider/cache/d4588158fc06ae1fcda3e453b180f5d0/Food-Technology-Classroom-2.webp"/>
                        <Card.Title>Food Technology Classrooms</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        
                    </Card.Body>
                    </Card>
                    
                        <Card border="light" style={{ width: '16rem' }} >
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted"><BsHeart/></Card.Subtitle>
                            <Card.Img variant="top" src="https://crlabinstallations.co.uk/wp-content/uploads/2021/06/Chill-Out-Spaces-200.jpg"/>

                            <Card.Title>Bespoke Commercial & Educational Furniture</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                        </Card>
                    
                        <Card border="light" style={{ width: '16rem' }} >
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted"><BsHeart/></Card.Subtitle>
                            <Card.Img variant="top" src="https://crlabinstallations.co.uk/wp-content/uploads/2021/06/School-Technology-Design-Classroom-Suppliers-200.jpg"/>
                            <Card.Title>Design & Technology Classrooms</Card.Title>
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