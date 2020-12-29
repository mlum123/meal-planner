import React from "react";
import { Container, Row, Col } from "reactstrap";

class Schedule extends React.Component {
  render() {
    return (
      <div className="Schedule">
        <header>
          <Container>
            <Row>
              <Col xs="12" className="mt-3 text-center">
                <h1>Schedule</h1>
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default Schedule;
