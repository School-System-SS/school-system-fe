import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import { BsHeart } from "react-icons/bs";
import "../styles/Services.css"

export default function Services() {

    return (
        <section id='services'>
            <h3>Services</h3>
            <Container className="services" >

                <Card style={{ width: '16rem' }}>
                    <Card.Img className="h-32" variant="top" src="https://lsuonline-static.s3.amazonaws.com/media/images/2020/04/20/school-counselor-feature.jpg" />
                    <Card.Body>
                        <Card.Title className="text-center">Student counsellors</Card.Title>
                        <Card.Text>
                            Everyone feels overwhelmed by school at least once during their studies and there’s absolutely no reason to face this feeling alone.

                        </Card.Text>

                    </Card.Body>
                </Card>

                <Card style={{ width: '16rem' }}>
                    <Card.Img className="h-32" variant="top" src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F220831094610-graduate-hats-stock.jpeg" />
                    <Card.Body>
                        <Card.Title className="text-center">Career services</Card.Title>
                        <Card.Text>
                        Everyone feels overwhelmed by school at least once during their studies and there’s absolutely no reason to face this feeling alone.                        </Card.Text>

                    </Card.Body>
                </Card>

                <Card style={{ width: '16rem' }}>
                    <Card.Img className="h-32" variant="top" src="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2022/10/GettyImages-1422783091-1920x1080.jpg" />
                    <Card.Body>
                        <Card.Title className="text-center">healthcare</Card.Title>
                        <Card.Text>
                        Everyone feels overwhelmed by school at least once during their studies and there’s absolutely no reason to face this feeling alone.
                        </Card.Text>

                    </Card.Body>
                </Card>
               
                <Card style={{ width: '16rem' }}>
                    <Card.Img className="h-32" variant="top" src="https://media.istockphoto.com/id/947895170/photo/where-dreams-are-turned-into-reality.jpg?s=612x612&w=0&k=20&c=gxONAsgLG7S90u-cR1dQAqurhZyFrwzDrmBaR2PwJq4=" />
                    <Card.Body>
                        <Card.Title className="text-center">Study training</Card.Title>
                        <Card.Text>
                        Everyone feels overwhelmed by school at least once during their studies and there’s absolutely no reason to face this feeling alone.
                        </Card.Text>

                    </Card.Body>
                </Card>





            </Container>
        </section>






        // <section id='services'>
        //     <h3>Services</h3>

        //         <Container className="services" >
        //                 <Card border="light" style={{ width: '16rem' }} >
        //                 <Card.Body>
        //                     <Card.Img className="w-4 h-[15%]"  variant="top" src="https://i0.wp.com/schoolsfootball.org/wp-content/uploads/2018/08/ESFA_U18B_MvAGS_290317_355.jpg?fit=2000%2C1331&ssl=1" />
        //                     <Card.Title>Football Team
        //                     </Card.Title>
        //                     <Card.Text>
        //                     Some quick example text to build on the card title and make up the
        //                     bulk of the card's content.
        //                     </Card.Text>

        //                 </Card.Body>
        //                 </Card>




        //             <Card border="light" style={{ width: '16rem' }}>
        //             <Card.Body>
        //                 <Card.Img className="w-4 h-[15%]" variant="top" src="https://www.abestfashion.com/wp-content/uploads/2021/06/julian-hochgesang-sA5wcAu4CBA-unsplash-1.jpg"/>
        //                 <Card.Title className='text-center' >Student counsellors</Card.Title>
        //                 <Card.Text >
        //                 Everyone feels overwhelmed by university at least once during their studies – and there’s absolutely no reason to face this feeling alone.
        //                 </Card.Text>

        //             </Card.Body>
        //             </Card>

        //                 <Card border="light" style={{ width: '16rem' }} >
        //                 <Card.Body>
        //                     <Card.Img className="w-4 h-[15%]" variant="top" src="https://static.wixstatic.com/media/592604_8192aca0c68040afb61bbf22fd74ee0d~mv2.png/v1/fill/w_2500,h_1452,al_c/592604_8192aca0c68040afb61bbf22fd74ee0d~mv2.png"/>

        //                     <Card.Title className='text-center'> healthcare</Card.Title>
        //                     <Card.Text >
        //                     Some schools offer a student medical service on campus with flexible appointments, telephone consultations.                        </Card.Text>

        //                 </Card.Body>
        //                 </Card>

        //                 <Card border="light" style={{ width: '16rem' }} >
        //                 <Card.Body>
        //                     <Card.Img className="w-4 h-[15%]" variant="top" src="https://numinoscoaching.com/lib/vzhyi4/AdobeStock_189077517_edited-l4icxer3.jpg"/>
        //                     <Card.Title className='text-center'>Study training </Card.Title>
        //                     <Card.Text>
        //                     Some schools offer study skills workshops and training courses to teach students effective revision strategies and time management. 
        //                     </Card.Text>

        //                 </Card.Body>
        //                 </Card>

        //         </Container>


        //         </section> 





    )
}