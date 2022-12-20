import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addPhotosAction } from "../../Actions/Photos";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./home.css";
import Card from "../Card/Card";

function Home() {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);

  const { photos } = useSelector((state) => state.homePhotos);

  useEffect(() => {
    dispatch(addPhotosAction(pageNumber));
  }, [pageNumber]);
  return (
    <div className="homeContainer">
      <container fluid className="">
        <Row className="justify-content-md-center">
          <Col className="col-md-5">
            <Card data={photos[0]} />
          </Col>
          <Col className="col-md-3">llls</Col>
        </Row>
      </container>
    </div>
  );
}

export default Home;
