
// import { Container,Row,Col,Form,Button } from "react-bootstrap";
// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
//  export default function Login()
// {
//   const[email,setEmail]=useState('');
// const[password,setPassword]=useState('');
// const nav=useNavigate();
//   function userLogin(){
//   console.log(email);
//   console.log(password);
//   alert('rest')
//   }
// let submitlogin=async()=>{ 
//   let params={
//     email:email,
//     password:password
//   }
//   console.log(params);
//   try {
//     let res =await axios.post("login",params).catch(err=>alert(err))
//     console.log(res.data);
//     let {success,message} =res.data
//     if(success){
//     alert(message)
//     nav("/")
//     }
//     else{
//       alert(message)
//      }
//      } catch (error) {
//     alert(error)
//   }
//   setEmail("")
//   setPassword("")
// }
//     return(
//     <Container  style={{textAlign:"center"}}>
//         <Row className="py-5 dd">
//           <h1>Login</h1>
//             <Col >
//             <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control   style={{width: "296px",textAlign:"center",marginLeft:"500px"}}  type="email" placeholder="Enter email" value={email} onChange={d=>setEmail(d.target.value)} />
//         <Form.Text  className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>
//       <Form.Group style={{width: "296px",textAlign:"center",marginLeft:"500px"}} className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" value={password} onChange={d=>setPassword(d.target.value)} />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" onClick={submitlogin } style={{marginBottom:"10px"}}>
//         Submit
//       </Button>
//     </Form>
//             </Col>
//         </Row>
//     </Container>
//     )
// }

import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const nav = useNavigate();

    const submitLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setErrorMessage(''); // Reset error message
        setSuccessMessage(''); // Reset success message

        // Validate form fields
        if (!email || !password) {
            setErrorMessage('Both fields are required.');
            return;
        }

        const params = {
            email: email,
            password: password
        };

        try {
            const res = await axios.post("/api/login", params); // Adjust URL if needed
            console.log(res.data);
            const { success, message } = res.data;

            if (success) {
                setSuccessMessage(message);
                nav("/"); // Navigate to home or desired page after login
            } else {
                setErrorMessage(message);
            }
        } catch (error) {
            console.error("Login error:", error);
            setErrorMessage(error.response?.data?.message || "An error occurred during login. Please try again.");
        }

        // Clear input fields
        setEmail("");
        setPassword("");
    };

    return (
        <Container style={{ textAlign: "center" }}>
            <Row className="py-5">
                <h1>Login</h1>
                <Col>
                    <Form onSubmit={submitLogin}>
                        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>} {/* Display error message */}
                        {successMessage && <Alert variant="success">{successMessage}</Alert>} {/* Display success message */}

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                style={{ width: "296px", textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={d => setEmail(d.target.value)}
                                required
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                style={{ width: "296px", textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={d => setPassword(d.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{ marginBottom: "10px" }}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

