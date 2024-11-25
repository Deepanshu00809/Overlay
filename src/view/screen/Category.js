import { Container,Row,Col } from "react-bootstrap";




function Category(){
    return(
        <Container>
            <Row className="py-5">
                <Col lg={4}>
                <img src={require('../img/r1.webp' )} style={{width:"80%",height:"500px"}}/>
                
                </Col>
                <Col lg={4}>
                <img src={require('../img/r2.webp')} style={{width:"80%",height:"500px"}}/>
                </Col>
                <Col  lg={4}>
                <img src={require('../img/r4.webp')} style={{width:"80%",height:"500px"}}/>
                </Col>
            </Row>

            <Row className="py-2">
                <Col lg={4}>
                <img src={require('../img/r1.webp' )} style={{width:"80%",height:"500px"}} />
                
                </Col>
                <Col lg={4}>
                <img src={require('../img/r2.webp')} style={{width:"80%",height:"500px"}}/>
                </Col>
                <Col  lg={4}>
                <img src={require('../img/r4.webp')} style={{width:"80%",height:"500px"}}/>
                </Col>
            </Row>

        </Container>
        
   );
    }
export default Category;