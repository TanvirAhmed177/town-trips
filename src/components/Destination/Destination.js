import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import transports from "../../fakeData/fakeData";
import { Col, Container, Row } from "react-bootstrap";
import people from "../../images/peopleicon.png";
import GoogleMap from "../GoogleMap/GoogleMap";
import "./Destination.scss";

// Please Enter the value in Input boxes to see Trip Details (Location,Destination,Date,Time)

const Destination = () => {
  const { type } = useParams();
  const selectedTransport = transports.find((tp) => tp.type === type);
  console.log(selectedTransport);
  const { price, capacity, imgUrl } = selectedTransport;
  const [show, toggleShow] = useState(false);
  const [tripDetails, setTripDetails] = useState({
    From: "",
    To: "",
    Date: "",
    Time: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setTripDetails({ ...tripDetails, [e.target.name]: value });
  };

  return (
    <Container>
      <Row className=" justify-content-center p-5">
        <Col
          style={{
            boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
            borderRadius: "10px",
          }}
          className="mt-3 mb-5 m-lg-2 m-sm-2 m-md-3 p-5 p-lg-3 p-sm-2 p-md-3 col-lg-3 col-12 col-sm-8 col-md-4 bg-light"
        >
          {!show && (
            <div
              style={{
                height: "433px",
                padding: "10px",
              }}
            >
              <form action="">
                <input
                  type="text"
                  name="From"
                  onChange={handleChange}
                  placeholder="Your Location"
                  id="location"
                  className="form__field"
                />
                <br />
                <br />

                <input
                  type="text"
                  name="To"
                  onChange={handleChange}
                  placeholder="Destination"
                  id="dest"
                  className="form__field"
                />
                <br />
                <br />

                <br />
                <input
                  type="date"
                  name="Date"
                  onChange={handleChange}
                  id="date"
                  className="form__field"
                />
                <br />
                <br />

                <br />
                <input
                  type="time"
                  name="Time"
                  onChange={handleChange}
                  id="time"
                  className="form__field"
                />
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
            <div
              style={{
                height: "433px",
              }}
            >
              <div>
                <b>From:</b> <h2>{tripDetails.From}</h2>
                <b> To:</b> <h2>{tripDetails.To}</h2>
                <b>Date:</b> <h2>{tripDetails.Date}</h2>
                <b> Time:</b> <h2 className="mb-4">{tripDetails.Time}</h2>
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
        <Col className="mt-5 m-lg-2 m-1 m-sm-2 m-md-3 p-lg-0 p-1 p-sm-2 p-md-3 col-lg-6 col-12 col-sm-8 col-md-4">
          <div>
            <GoogleMap></GoogleMap>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Destination;
