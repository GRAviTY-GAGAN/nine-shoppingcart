import React from "react";
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardHeader,
    CardBody,
    Card,
    CardFooter,
    Col,
    Row,
} from "reactstrap";

const Cart = ({cartItem, removeItem, buyNow}) => {
    let amount = 0;

    cartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice);
    });

    return(
        <Container fluid>
            <h1 className="text-success">Your Cart</h1>
            <ListGroup>
                {cartItem.map(item => (
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                            <img 
                            height={80}
                            src={item.tinyImage}
                            />
                            </Col>
                            <Col className="text-center">
                            <div className="text-primary">
                                {item.productName}
                            </div>
                            <span>price :- {item.productPrice}</span>
                            <Button color="danger" className="m-2" onClick={() => removeItem(item)}>Remove</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>
            
            {/* If everything is empty  */}
                    {
                        cartItem.length >= 1 ? (
                            <Card className="text-center mt-3">
                                <CardHeader>
                                    Grand Total
                                </CardHeader>
                                <CardBody>
                                    Your amount is for {cartItem.length} {cartItem.length > 1 ? 'products' : 'product'} is {amount}
                                </CardBody>
                                <CardFooter>
                                    <Button color="success" onClick={buyNow}>Pay Here</Button>
                                </CardFooter>
                            </Card>
                        )  : (
                            <h1 className="text-warning">Cart is empty</h1>
                        )
                    }
        </Container>
    )

}



export default Cart;