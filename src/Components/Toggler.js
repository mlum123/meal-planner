import React from "react";
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";
import View from "./View";

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = { view: "schedule" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ view: event.target.value });
  }

  render() {
    return (
      <div className="Toggler">
        <header>
          <Container>
            <Row>
              <Col xs="12" className="mt-3 text-center">
                <ButtonGroup>
                  <Button
                    className="font-weight-bold pr-3"
                    value="recipe"
                    onClick={this.handleClick}
                  >
                    Recipe Search
                  </Button>
                  <Button
                    className="font-weight-bold pr-3"
                    value="restaurant"
                    onClick={this.handleClick}
                  >
                    Restaurant Search
                  </Button>
                  <Button
                    className="font-weight-bold"
                    value="schedule"
                    onClick={this.handleClick}
                  >
                    Meal Schedule
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="12">
                <View view={this.state.view} />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default Toggler;
