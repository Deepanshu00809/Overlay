// import { Container,Row,Col,Form,Button } from "react-bootstrap";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function Register()
// {
   
//     const nav=useNavigate()
//     const[name,setName]= useState('');
//     const[email,setEmail]= useState('');
//     const[password,setPassword]= useState('');

//     const [file, setFile] = useState("");
//     const [fileName, setFileName] = useState("");
     
// let submitregister=async()=>{
//     console.log(file);
//     console.log(fileName);
    
//       const formdata= new FormData();
//       formdata.append("file",file)
//       formdata.append("filename",fileName)
//       let data =JSON.stringify( Object.fromEntries(formdata));
    
//     console.log(data);
//       let params={
//       username:name,
//       email:email,
//       password:password,
//       image:file
//     }
//     console.log(params);
//     try {
//         let res =await axios.post("register",params).catch(err=>alert(err))
//         console.log(res.data);
//         let {success,message} =res.data
//         if(success){
//           alert(message)
//           nav("/login")
//         //   setLogReg("login")
//         }
//         else{
//           alert(message)
        
//         }
//       } catch (error) {
//         console.log("error==",error);
//         alert(error)
//       }
    
//     setEmail("")
//     setPassword("")
//     setName("")
//     }
//     return(
       
//         <Container className="py-5" >
//             <Row  style={{textAlign:"center"}}>
//             <h1  >Register</h1>
//                 <Col>
//                 <Form style={{width: "296px",textAlign:"center",marginLeft:"500px"}} >
//                 <Form.Group className="mb-3" controlId="formBasicEmail" >
//         <Form.Label>Name</Form.Label>
//         <Form.Control  type="Name" placeholder="Enter Name"  value={name} onChange={d=>setName(d.target.value)}/>
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" value={email} onChange={d=>setEmail(d.target.value)}/>
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" value={password} onChange={d=>setPassword(d.target.value)}/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" onClick={submitregister}>
//         Submit
//       </Button>
//     </Form>
//                 </Col>
//             </Row>

//         </Container>
//     )
// }
// export default Register;
// import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function Register() {
//     const nav = useNavigate();
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [file, setFile] = useState(null);
//     const [errorMessage, setErrorMessage] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     };

//     const submitRegister = async (e) => {
//         e.preventDefault(); // Prevent default form submission behavior
//         setErrorMessage(''); // Reset error message
//         setSuccessMessage(''); // Reset success message

//         // Validate form fields
//         if (!name || !email || !password || !file) {
//             setErrorMessage('All fields are required.');
//             return;
//         }

//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("username", name);
//         formData.append("email", email);
//         formData.append("password", password);

//         try {
//             const res = await axios.post("/api/register", formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             const { success, message } = res.data;
//             if (success) {
//                 setSuccessMessage(message);
//                 nav("/login");
//             } else {
//                 setErrorMessage(message);
//             }
//         } catch (error) {
//             console.error("Error during registration:", error);
//             setErrorMessage(error.response?.data?.message || "An error occurred during registration. Please try again.");
//         }

//         // Clear form fields
//         setName("");
//         setEmail("");
//         setPassword("");
//         setFile(null);
//     };

//     return (
//         <Container className="py-5">
//             <Row style={{ textAlign: "center" }}>
//                 <h1>Register</h1>
//                 <Col>
//                     <Form onSubmit={submitRegister} style={{ width: "400px", margin: "0 auto" }}>
//                         {errorMessage && <Alert variant="danger">{errorMessage}</Alert>} {/* Display error message */}
//                         {successMessage && <Alert variant="success">{successMessage}</Alert>} {/* Display success message */}

//                         <Form.Group className="mb-3" controlId="formBasicName">
//                             <Form.Label>Name</Form.Label>
//                             <Form.Control type="text" placeholder="Enter Name" value={name} onChange={d => setName(d.target.value)} required />
//                         </Form.Group>
                        
//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                             <Form.Label>Email address</Form.Label>
//                             <Form.Control type="email" placeholder="Enter email" value={email} onChange={d => setEmail(d.target.value)} required />
//                         </Form.Group>
                        
//                         <Form.Group className="mb-3" controlId="formBasicPassword">
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control type="password" placeholder="Password" value={password} onChange={d => setPassword(d.target.value)} required />
//                         </Form.Group>
                        
//                         <Form.Group className="mb-3" controlId="formBasicFile">
//                             <Form.Label>Upload Profile Picture</Form.Label>
//                             <Form.Control type="file" onChange={handleFileChange} required />
//                         </Form.Group>
                        
//                         <Button variant="primary" type="submit">
//                             Submit
//                         </Button>
//                     </Form>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default Register;
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
    const nav = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const submitRegister = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setErrorMessage(''); // Reset error message
        setSuccessMessage(''); // Reset success message

        // Validate form fields
        if (!name || !email || !password) {
            setErrorMessage('All fields are required.');
            return;
        }

        const formData = {
            username: name,
            email: email,
            password: password,
        };

        try {
            const res = await axios.post("/api/register", formData);
            const { success, message } = res.data;
            if (success) {
                setSuccessMessage(message);
                nav("/login");
            } else {
                setErrorMessage(message);
            }
        } catch (error) {
            console.error("Error during registration:", error);
            setErrorMessage(error.response?.data?.message || "An error occurred during registration. Please try again.");
        }

        // Clear form fields
        setName("");
        setEmail("");
        setPassword("");
    };

    return (
        <Container className="py-5">
            <Row style={{ textAlign: "center" }}>
                <h1>Register</h1>
                <Col>
                    <Form onSubmit={submitRegister} style={{ width: "400px", margin: "0 auto" }}>
                        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>} {/* Display error message */}
                        {successMessage && <Alert variant="success">{successMessage}</Alert>} {/* Display success message */}

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" value={name} onChange={d => setName(d.target.value)} required />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={d => setEmail(d.target.value)} required />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={d => setPassword(d.target.value)} required />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Register;


