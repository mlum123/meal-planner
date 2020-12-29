import React from "react";
import { Container, Row, Col } from "reactstrap";
import Schedule from "./Schedule";
import SearchResults from "./SearchResults";

class View extends React.Component {
  render() {
    return (
      <div className="View">
        <header>
          <Container>
            <Row>
              <Col xs="12" className="mt-3 text-center">
                {this.props.view === "schedule" ? (
                  <Schedule />
                ) : (
                  <SearchResults view={this.props.view} />
                )}
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default View;
