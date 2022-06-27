import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import './App.css';

import { Container, Row, Col } from 'reactstrap';
import { ToastContainer, toast} from "react-toastify"

import BuyPage from './Components/BuyPage';
import Cart from './Components/Cart';

function App() {
const [cartItem, setCartItem] = useState([]);

const addInCart = item => {
const isAlreadyAdded = cartItem.findIndex(function(Array){ //Returns the index of the first element in the array where predicate is true, and -1 otherwise.
  return Array.id === item.id;
});

// The findIndex will return any index but not -1 if the item is already in the cart

if(isAlreadyAdded !== -1) {
  toast('Already added in cart', {
    type: "error"
});
return;
}
setCartItem([...cartItem, item]); 

// ... => spread operator

};

const buyNow = () => {
  setCartItem([]);

  toast('Purchase Complete' , {
    type: "success"
  });
};

const removeItem = item => {
  setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id));
};






  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md='8'>
          <BuyPage addInCart={addInCart} />
        </Col>
        <Col md='4'>
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
