// View component shows either recipe search, restaurant search, or meal schedule views depending on the view props passed to it
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
              <Col xs="12" className="mt-3">
                {this.props.view === "schedule" ? (
                  <>
                    <Schedule
                      meals={this.props.meals}
                      onRemove={this.props.onRemove}
                    />
                  </>
                ) : (
                  <SearchResults
                    view={this.props.view}
                    onRecipeSearch={this.props.onRecipeSearch}
                    onRestaurantSearch={this.props.onRestaurantSearch}
                    onAdd={this.props.onAdd}
                    recipes={this.props.recipes}
                    restaurants={this.props.restaurants}
                  />
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
