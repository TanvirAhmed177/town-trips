import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Transport.css";

const Transport = (props) => {
  const { type, imgUrl } = props.transport;

  return (
    <div>
      <Col className="m-lg-2 m-1 m-sm-2 m-md-3 p-lg-2 p-1 p-sm-2 p-md-3 col-lg-4 col-6 col-sm-8 col-md-4">
        <Link
          to={`/destination/${type}`}
          className=" text-info text-decoration-none"
        >
          <Card
            style={{
              width: "18rem",
            }}
            className="p-3 transports"
          >
            <Card.Img variant="top" src={imgUrl} />
            <Card.Body>
              <Card.Title>{type}</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </div>
  );
};

export default Transport;
