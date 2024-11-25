import { Form,Button,Container,Row,Col } from "react-bootstrap";
function Search(){
    return(
        <Container className="go">
            <Row  className="py-5">
                <Col lg={4}>
               
         <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> 
          </Col>
          </Row>
          </Container>
    )
}
export default Search;