import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import API from "../../utils/API";
import DeleteMerchBtn from "../DeleteMerchBtn";
import {useAuthContext} from "../../store/contexts/authContext";

export default function MerchCard(props) {

    const [authState, dispatch] = useAuthContext();

    return (
        <Row className="align-items-center justify-content-center">
            {console.log("merch " + props)}
            
            {props.merch.map((merch, i) =>
                <Card key={i + "-merchItem"} merch={merch} style={{ width: "300px", margin: "10px" }}>
                    <Card.Img variant="top" src={merch.image} style={{ textAlign: "center", height: "250px", width: "299px" }} />
                    <Card.Body>
                        <Card.Title>{merch.itemName}</Card.Title>
                        <Card.Text>
                            {"$" + merch.price}
                            <br />
                            {merch.description}
                        </Card.Text>
                        <Button variant="dark">Purchase</Button>
                        
                        {authState.loggedIn && authState.isBand ? <DeleteMerchBtn id={merch.id} /> : <div></div>}
                    </Card.Body>
                    <Card.Footer className="text-muted">{merch.quantity}</Card.Footer>
                </Card>
            )}
        </Row>
    );
}