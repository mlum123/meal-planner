import React from "react";
import { Container, Row, Col } from "reactstrap";

class FailedSearch extends React.Component {
  render() {
    return (
      <div className="FailedSearch">
        <header>
          <Container>
            <Row>
              <Col xs="12" className="mt-3">
                No results found — try again!
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default FailedSearch;
