

import { useLocation, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
function Detail() {
  let nav = useNavigate();
  const loc = useLocation();
  const [products, setProducts] = useState(loc.state);


  async function  Cart (products){
    console.log(products);
    let params={
      ...products
    }
    let res=await axios.post("addtocart",params).catch(err=>alert(err))
    console.log(res.data);
    let {success,message}=res.data
    if(success){
alert(message)
nav('/')
    }
    else{
      alert(message)
    } 
  }
  // function Cart(d) {
  //   nav("/Cart");
  // }
  return (
    <>
      <Row>
        <Col>
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6">
              <img src={products.img}/>
                         <p>{products.name}</p>
                          <p>{products.rate}</p>
              </div>
              <div className="col-md-6">
                <h3>{products.name}</h3>
                <p>Category: {products.category}</p>
                <p>Description: {products.description}</p>
                <h4 className="text-danger">${products.rate}</h4>
                {/* <del className="text-muted">${products.mrp}</del> */}
                <br />
                <br />  
                <button
                  className="btn1"
                  onClick={() => Cart(products)}
                >
                 <h1> Add to cart</h1>
                </button>
                
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
export default Detail;