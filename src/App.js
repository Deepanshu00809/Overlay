import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './view/screen/About';
import Detail from './view/screen/Detail';
import Home from './view/screen/Home';
import Login from './view/screen/Login';
import Register from './view/screen/Register';
import Payment from './view/screen/Payment';

import Category from './view/screen/Category';
import Contact from './view/screen/Contact';
import Search from './view/screen/Search';
import 'bootstrap/dist/css/bootstrap.min.css';

import React,{useState} from 'react';
import { Container,Row,Col,Button,Nav,Navbar,Form, NavLink } from 'react-bootstrap';
import { menubar } from './view/data/data';
import '../src/view/style/Style.css'
import Cart from './view/screen/Cart';
// import { useNavigate } from 'react-router-dom';
function App(){
  // const nav = useNavigate()
    console.log(menubar);
  
    return(
        <>
        <BrowserRouter>
        <Container >
            <Row  className='py-5'>
                <Col lg={8}>
                <Navbar bg="white" expand="lg" >
      <Container fluid className='T' style={{fontWeight:"bold" }}>
        <Navbar.Brand href="#">OVERLAYS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
                 <Nav.Link href="/">Home</Nav.Link>      
            {
                menubar.map(function(d){
                    return(
                        <Nav.Link href={`/${d}`}>{d}</Nav.Link>
                    )
                })
            }
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="/" disabled>
              Login 
            </Nav.Link> */}
          </Nav>
         
         
           {/* <img src={require('../src/view/img/search.png')} style={{width:"5%"}} /> */}
         

       
         
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
                </Col>

                <Col className='B'     lg={4}>
                <Navbar>
                <Nav.Link href='/Search'> <img src={require('../src/view/img/sea.png')} style={{width:"70%"}} className='b1' />  </Nav.Link>
                <Nav.Link href='https://www.gmail.com/'> <img src={require('../src/view/img/mail.png')} style={{width:"100%"}} className='b1' />  </Nav.Link>
                <Nav.Link href='/Cart'>  <img src={require('../src/view/img/cart.jpg')} style={{width:"100%"}} className='b1' />  </Nav.Link>
                <Nav.Link href='/Register'>  <img src={require('../src/view/img/Login.jpg')} style={{width:"20%"}} className='b1' />  </Nav.Link>
              </Navbar>
                </Col>
            </Row>
        </Container>
        <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail' element={<Detail/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/Search' element={<Search/>}/>
            <Route path='/category' element={<Category/>}/>
         
        </Routes>
        
        <Container fluid>
            <div className="bg-dark text-light">
            <Row className="py-5">
            <Col>
            <Row>
              <Col lg={'3'} style={{textAlign:'right'}}>
            
              </Col>
              <Col>
              <Nav.Link href='/about'>
              <h5>ABOUT US</h5></Nav.Link>
              <p>Overlays is all about bringing a change - a positive change - into people's lives.
Learn More</p>
              </Col>
            </Row>
            </Col>
            <Col>
            <Row>
              <Col lg={'3'} style={{textAlign:'right'}}>
            
              </Col>
              <Col>
              <h5>POLICIES</h5>
              <p>Exchange/Return Your Order
Privacy Policy
Exchange and Refund Policy
Shipping Policy
Terms and Conditions
Fraud Protection</p>
              </Col>
            </Row>
            </Col>
            <Col>
            <Row>
              <Col lg={'3'} style={{textAlign:'right'}}>
          
              </Col>
              <Col>
              <h5>NEWSLETTER</h5>
              
              <p>Sign up to stay updated with new launches and cool offers.

</p>
            <Col>
            <input type='text Box'></input>
            </Col>
              </Col>
            </Row>
            </Col>
            <Col>
            <Row>
              <Col lg={'3'} style={{textAlign:'right'}}>
         
              </Col>
              <Col>
              <h5>FOLLOW US</h5>
              <p>Write to us at support@overlaysclothing.com</p>
              <Row>
                <Col>
                <Nav.Link href='https://www.facebook.com/'>
                <img src={require('../src/view/img/facebook.png')}   style={{width:"80%"}}/>  </Nav.Link> </Col> 
                <Col>
                <Nav.Link href='https://www.twitter.com/'>
                 <img src={require('../src/view/img/twitter.jpg')}  style={{width:"80%"}}/> </Nav.Link></Col>
                <Col> 
                <Nav.Link href='https://www.instagram.com/'>
                <img src={require('../src/view/img/insta.jpeg')}  style={{width:"80%"}}/> </Nav.Link>
                </Col>

                <Col> 
                <Nav.Link href='https://www.youtube.com/'>
                <img src={require('../src/view/img/you.png')}  style={{width:"80%"}}/>
                </Nav.Link> </Col>
              </Row>
              </Col>
            </Row>
            </Col>

            </Row> 
            </div>
        </Container>
        
        </BrowserRouter>
        </>
    );
}
export default App;