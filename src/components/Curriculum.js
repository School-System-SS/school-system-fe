import React from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import "../styles/Curriculum.css"
export default function Curriculum() {
    return (
        <section id="Curriculum">
            <h3>Curriculum</h3>

            <Container className="Curriculum" >

                <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src="https://assets.booksbybsf.com/products/ElementsofMathematicsForClass9.webp" />
                    <Card.Body>
                        <Card.Title className="text-center">NATIONAL</Card.Title>
                        <Card.Text>
                        The first National Book Awards were presented in May 1936 at the annual 
                        convention of the American Booksellers Association .
                        </Card.Text>

                    </Card.Body>
                </Card>

                <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src="https://product.hstatic.net/200000239353/product/ok-1_7ccdeb8eaeb2474ab0ca6d46081d6a80_0f540007630547459a7ddaa49d1d4eac_335335d58bd64108b0ee43f93ee90f86_master.jpg" />
                    <Card.Body>
                        <Card.Title className="text-center">SAT</Card.Title>
                        <Card.Text>
                        The SAT is a globally recognized college admission
                        test that lets you show colleges what you know and how well you can apply that knowledge.
                        
                        </Card.Text>

                    </Card.Body>
                </Card>


                <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src="https://lextralearning.com/wp-content/uploads/2021/05/MathsTextCover.jpeg" />
                    <Card.Body>
                        <Card.Title className="text-center">IG</Card.Title>
                        <Card.Text>
                        The International General Certificate of Secondary Education is a content-rich programme that prepares students
                         for further study .
                        </Card.Text>

                    </Card.Body>
                </Card>





            </Container>




        </section>
    )
}