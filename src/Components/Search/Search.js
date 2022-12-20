import React, { useEffect, useState } from "react";
import "./search.css";
import Container from "react-bootstrap/Container";
import { useSelector, useDispatch } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { searchPhotosAction } from "../../Actions/Photos";
import InfiniteScroll from "react-infinite-scroll-component";

function Search() {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { searchTerm, searchedPhotos } = useSelector(
    (state) => state.homePhotos
  );
  useEffect(() => {
    setPageNumber(1);
    dispatch(searchPhotosAction(1, searchTerm));
  }, [searchTerm]);

  const fetchMore = () => {
    dispatch(searchPhotosAction(pageNumber + 1, searchTerm));
    console.log(pageNumber);
    setPageNumber((prev) => prev + 1);
  };

  return (
    <div className="searchContainer">
      <Container className="innerSearchContainer">
        <InfiniteScroll
          dataLength={searchedPhotos.length}
          next={fetchMore}
          hasMore={hasMore}
          loader={<p style={{ textAlign: "center" }}>loading...</p>}
          style={{ overflow: "hidden" }}
        >
          <Row className="justify-content-md-center">
            {searchedPhotos?.map((item) => (
              <Col className="col-md-3 mt-4" xs={12}>
                <div className="imgContainer">
                  <img width="100%" height="100%" src={item.urls.thumb} />
                </div>
              </Col>
            ))}
          </Row>
        </InfiniteScroll>
      </Container>
    </div>
  );
}

export default Search;
