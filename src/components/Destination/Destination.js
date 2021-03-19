import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import transports from "../../fakeData/fakeData";
import { Col, Container, Row } from "react-bootstrap";
import people from "../../images/peopleicon.png";
import GoogleMap from "../GoogleMap/GoogleMap";

const Destination = () => {
  const { type } = useParams();
  const selectedTransport = transports.find((tp) => tp.type === type);
  console.log(selectedTransport);
  const { price, capacity, imgUrl } = selectedTransport;
  const [show, toggleShow] = useState(false);
  const [pickPlace, setPickPlace] = useState("");
  const [destinationPlace, setDestinationPlace] = useState("");
  const handlePickUpChange = (e) => {
    const place = e.target.value;
    setPickPlace(place);
  };
  const handleDestinationChange = (e) => {
    const place = e.target.value;
    setDestinationPlace(place);
  };

  return (
    <Container>
      <Row>
        <Col className="mt-5 justify-content-center col-lg-3 col-8 mx-auto  bg-light p-5 ">
          {!show && (
            <div>
              <form action="">
                <label htmlFor="From">Pick From</label>
                <input
                  type="text"
                  name="pickUp"
                  onChange={handlePickUpChange}
                />
                <br />
                <br />

                <label htmlFor="From">Pick To</label>
                <input
                  type="text"
                  name="destination"
                  onChange={handleDestinationChange}
                />
                <br />
                <br />
                <label htmlFor="From">Date</label>
                <input type="date" name="Date" />
                <br />
                <br />
                <label htmlFor="From">Time</label>
                <br />
                <input type="time" name="Time" />
                <br />
                <br />
                <Link
                  className="border border-info p-2 text-decoration-none bg-info text-light"
                  onClick={() => toggleShow(!show)}
                >
                  Search
                </Link>
              </form>
            </div>
          )}
          {show && (
            <div>
              <div>
                <b>From:</b> <h2>{pickPlace}</h2>
                <b> To:</b> <h2 className="mb-5">{destinationPlace}</h2>
              </div>
              <div className="d-flex mb-3 ">
                <img className="pr-2" height="40px" src={imgUrl} alt="" />
                <p className="pr-3">
                  <b>{type}</b>
                </p>
                <img height="20px" src={people} alt="" />
                <p className="pr-2">
                  <b>{capacity}</b>
                </p>
                <p className="pl-4">
                  <b>${price}</b>
                </p>
              </div>
              <div className="d-flex mb-3">
                <img className="pr-2" height="40px" src={imgUrl} alt="" />
                <p className="pr-3">
                  <b>{type}</b>
                </p>
                <img height="20px" src={people} alt="" />
                <p className="pr-2">
                  <b>{capacity}</b>
                </p>
                <p className="pl-4">
                  <b>${price}</b>
                </p>
              </div>
              <div className="d-flex mb-3">
                <img className="pr-2" height="40px" src={imgUrl} alt="" />
                <p className="pr-3">
                  <b>{type}</b>
                </p>
                <img height="20px" src={people} alt="" />
                <p className="pr-2">
                  <b>{capacity}</b>
                </p>
                <p className="pl-4">
                  <b>${price}</b>
                </p>
              </div>
            </div>
          )}
        </Col>
        <Col className="mt-5 justify-content-center ">
          <GoogleMap></GoogleMap>
        </Col>
      </Row>
    </Container>
  );
};

export default Destination;
