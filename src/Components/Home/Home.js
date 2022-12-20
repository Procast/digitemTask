import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addPhotosAction } from "../../Actions/Photos";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./home.css";
import Card from "../Card/Card";
import InfiniteScroll from "react-infinite-scroll-component";

function Home() {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { photos } = useSelector((state) => state.homePhotos);

  useEffect(() => {
    dispatch(addPhotosAction(pageNumber));
  }, []);

  const fetchMore = () => {
    dispatch(addPhotosAction(pageNumber + 1));
    setPageNumber((prev) => prev + 1);
  };
  return (
    <div className="homeContainer">
      <Container className="">
        <InfiniteScroll
          dataLength={photos.length}
          next={fetchMore}
          hasMore={hasMore}
          loader={<p style={{ textAlign: "center" }}>loading...</p>}
          style={{ overflow: "hidden" }}
        >
          <Row className="justify-content-md-center">
            <Col className="col-md-6" xs={12}>
              {photos.map((item) => (
                <Col className="col-md-12">
                  <Card data={item} />
                </Col>
              ))}
            </Col>
          </Row>
        </InfiniteScroll>
      </Container>
    </div>
  );
}

export default Home;
