import { Container,Col,Row,Carousel,Card,ListGroup } from "react-bootstrap";
import { banner,Cloths,fashion,category } from "../data/data";
import '../style/Style.css'
import { useNavigate } from "react-router-dom";
import Category from "./Category";
function Home(){
  const nav = useNavigate()
  // console.log(Cloths);
    return(
        <Container className="py-5">
           <Row>
            <Col>
            <Carousel>
              {
                banner.map(function(d){
                  return(
                    <Carousel.Item>
                      
                    <img
                      className="d-block w-100"
                      src={d}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      {/* <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                  </Carousel.Item>
                  )
                })
              }
    </Carousel>
            </Col>
           </Row>
           <Row className="py-5">
            {
              Cloths.map(function(d){
                return(
                  <Col style={{padding:"20px"}}>
                  <Card style={{ width: '18rem' }}className="cur" onClick={()=>nav('/Detail',{state:d})}>
      <Card.Img  variant="top" src={d.img}/>
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text>
                  {d.name}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{d.rate}</ListGroup.Item>
        {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
      </ListGroup>
      <Card.Body>
        {/* <Card.Link href="#">Detail</Card.Link> */}
        <Card.Link href="#">Add To Cart</Card.Link>
      </Card.Body>
    </Card>
                  </Col>
                )
              })
            }    
           </Row>
           <Row>
            <Col lg={12}>
            <img src={require('../img/o.webp')} style={{width:"100%"}}/>
            </Col>
           </Row>
          <Row className="py-5">
            {
              category.map(function(Category){
                return(

                  <Col>
                  {/* <marquee> */}
            <p className="Class" onClick={()=>nav('/category',{state:Category})}> 
            
            SHOP BY CATEGORY</p>
            {/* </marquee> */}
                  </Col>


                )
              })
            }
          
          </Row>
           <Row className="py-5">
            {
              fashion.map(function(d){
                return(
                  <Col style={{padding:"20px"}}>
                  <Card style={{ width: '18rem' }}className="cur" onClick={()=>nav('/Detail',{state:d})}>
      <Card.Img  variant="top" src={d.img}/>
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text>
                  {d.name}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{d.rate}</ListGroup.Item>
        {/* <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
      </ListGroup>
      <Card.Body>
        {/* <Card.Link href="#">Detail</Card.Link> */}
        <Card.Link href="#">Add To Cart</Card.Link>
      </Card.Body>
    </Card>
                  </Col>
                )
              })
            }    
           </Row>
            <Row className="py-5">
            <Col>
            <Row>
              <Col lg={'3'} style={{textAlign:'right'}}>
              <img src={require('../img/truck_1_100x.png')} style={{width:"80%"}}/>
              </Col>
              <Col>
              <h5>FREE SHIPPING</h5>
              <p>Free Shipping Pan India: On All Prepaid Orders.</p>
              </Col>
            </Row>
            </Col>
            <Col>
            <Row>
              <Col lg={'3'} style={{textAlign:'right'}}>
              <img src={require('../img/truck.png')} style={{width:"80%"}}/>
              </Col>
              <Col>
              <h5>PAN-INDIA DELIVERY</h5>
              <p>Easy Returns:  Just return it within 15 days.</p>
              </Col>
            </Row>
            </Col>
            <Col>
            <Row>
              <Col lg={'3'} style={{textAlign:'right'}}>
              <img src={require('../img/t.png')}  style={{width:"80%"}}/>
              </Col>
              <Col>
              <h5>QUALITY PRODUCTS</h5>
              <p>Guaranteed Quality: We Take Pride In Our Products.</p>
              </Col>
            </Row>
            </Col>
            <Col>
            <Row>
              <Col lg={'3'} style={{textAlign:'right'}}>
              <img src={require('../img/Contact.png')} style={{width:"80%"}}/>
              </Col>
              <Col>
              <h5>CONTACT US</h5>
              <p>Write to us at support@overlaysclothing.com</p>
              </Col>
            </Row>
            </Col>

            </Row>
           
        </Container>
    );
}
export default Home;