// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { products } from '../data/data';
// import { useLocation } from 'react-router-dom';

// const Payment = ({totalPrice}) => {
//     const location = useLocation();
//     const selectedProducts = location.state && location.state.selectedProducts ? location.state.selectedProducts : [];
    
//   const [paymentInfo, setPaymentInfo] = useState({
//     cardNumber: '',
//     expirationDate: '',
//     cvv: '',
//     name: '',
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setPaymentInfo({ ...paymentInfo, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Here you could handle submitting the payment information to a server
//     // and show a confirmation message to the user
//   };

//   return (
//     <div className="container my-5">
//       <h1 className="mb-3">Payment</h1>
//       <div className="card">
//         <div className="card-header">
//           <h5>Order Summary</h5>
//         </div>
//         <div className="card-body">
//           <ul className="list-group mb-3">
//             {selectedProducts.map((product) => (
//               <li className="list-group-item d-flex justify-content-between align-items-center" key={product.id}>
//                 {product.name}
//                 <span className="badge badge-primary badge-pill">${product.price}</span>
//               </li>
//             ))}
//             <li className="list-group-item d-flex justify-content-between align-items-center">
//               Total Price :${totalPrice}
//               {/* <span className="badge badge-primary badge-pill">${totalPrice}</span> */}
//             </li>
//           </ul>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="cardNumber">Card Number</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="cardNumber"
//                 name="cardNumber"
//                 value={paymentInfo.cardNumber}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="expirationDate">Expiration Date</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="expirationDate"
//                 name="expirationDate"
//                 value={paymentInfo.expirationDate}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="cvv">CVV</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="cvv"
//                 name="cvv"
//                 value={paymentInfo.cvv}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="name">Name on Card</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 name="name"
//                 value={paymentInfo.name}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Submit Payment
//             </button>
//           </form>
//         </div>
//       </div>
//       <div className="mt-3">
//         <Link to="/" className="btn btn-secondary">
//           Back to Products
//         </Link>
//       </div>
//     </div>
//   );
// };
// export default Payment;

//SECOND CODE

// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { products } from '../data/data';

// const Payment = () => {
//   const location = useLocation();
//   const selectedProducts = location.state?.selectedProducts ?? [];
//   const [paymentInfo, setPaymentInfo] = useState({
//     cardNumber: '',
//     expirationDate: '',
//     cvv: '',
//     name: '',
//   });

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const totalPrice = urlParams.get('totalPrice');
//     document.getElementById('total-price').innerText = totalPrice ? `$${totalPrice}` : 'No items selected';
//   }, [selectedProducts]);
  

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setPaymentInfo({ ...paymentInfo, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Here you could handle submitting the payment information to a server
//     // and show a confirmation message to the user
//   };

//   return (
//     <div className="container my-5">
//       <h1 className="mb-3">Payment</h1>
//       <div className="card">
//         <div className="card-header">
//           <h5>Order Summary</h5>
//         </div>
//         <div className="card-body">
//           <ul className="list-group mb-3">
//             {selectedProducts.map((product) => (
//               <li className="list-group-item d-flex justify-content-between align-items-center" key={product.id}>
//                 {product.name} = ${product.price}
//                 {/* <span className="badge badge-primary badge-pill">${product.price}</span> */}
//               </li>
//             ))}
//             <li className="list-group-item d-flex justify-content-between align-items-center">
//               Total Price: 
//               <span id="total-price">loading...</span>
//             </li>
//           </ul>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="cardNumber">Card Number</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="cardNumber"
//                 name="cardNumber"
//                 value={paymentInfo.cardNumber}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="expirationDate">Expiration Date</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="expirationDate"
//                 name="expirationDate"
//                 value={paymentInfo.expirationDate}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="cvv">CVV</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="cvv"
//                 name="cvv"
//                 value={paymentInfo.cvv}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="name">Name on Card</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 name="name"
//                 value={paymentInfo.name}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Submit Payment
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Payment;

//third
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Payment = () => {
  const location = useLocation();
  const selectedProducts = location.state?.selectedProducts ?? [];
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    name: '',
  });
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const totalPrice = searchParams.get('totalPrice');
    setTotalPrice(totalPrice || 0);
  }, [location.search]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you could handle submitting the payment information to a server
    // and show a confirmation message to the user
    window.alert('Payment successful! Thank you for your purchase.');
  };
  return (
    <div className="container my-5">
      <h1 className="mb-3">Payment</h1>
      <div className="card">
        <div className="card-header">
          <h5>Order Summary</h5>
        </div>
        <div className="card-body">
          <ul className="list-group mb-3">
            {selectedProducts.map((product) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={product.id}>
                {product.name}
                <span className="badge badge-primary badge-pill">${product.price}</span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Total Price:
              <span id="total-price">${totalPrice ?? 0}</span>
            </li>
          </ul>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                className="form-control"
                id="cardNumber"
                name="cardNumber"
                value={paymentInfo.cardNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="expirationDate">Expiration Date</label>
              <input
                type="text"
                className="form-control"
                id="expirationDate"
                name="expirationDate"
                value={paymentInfo.expirationDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                className="form-control"
                id="cvv"
                name="cvv"
                value={paymentInfo.cvv}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name on Card</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={paymentInfo.name}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit Payment
            </button>
            <Link to="/Addtocart" className="btn btn-secondary ml-2">
              Back to Products 
            </Link>
            </form>
        </div>
      </div>
    </div>
  );
};
export default Payment;
