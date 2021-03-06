// Toggler component displays 3 buttons to switch between recipe search, restaurant search, and schedule views
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

    // clear form when switching between tabs
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
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
                    className="toggler font-weight-bold px-4"
                    value="recipe"
                    onClick={this.handleClick}
                  >
                    Recipe Search
                  </Button>
                  <Button
                    className="toggler font-weight-bold px-4"
                    value="restaurant"
                    onClick={this.handleClick}
                  >
                    Restaurant Search
                  </Button>
                  <Button
                    className="toggler font-weight-bold px-4"
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
                <View
                  view={this.state.view}
                  meals={this.props.meals}
                  onRecipeSearch={this.props.onRecipeSearch}
                  onRestaurantSearch={this.props.onRestaurantSearch}
                  onAdd={this.props.onAdd}
                  onRemove={this.props.onRemove}
                  recipes={this.props.recipes}
                  restaurants={this.props.restaurants}
                />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default Toggler;
