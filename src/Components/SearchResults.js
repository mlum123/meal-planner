import React from "react";
import { Container, Row, Col } from "reactstrap";
import SearchBar from "./SearchBar";

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <header>
          <Container>
            <Row>
              <Col xs="12" className="mt-3 text-center">
                <SearchBar view={this.props.view} />
              </Col>
            </Row>
            <Row>
              <Col xs="12" className="mt-3 text-center">
                {this.props.view === "recipe" ? (
                  <h1>Recipes</h1>
                ) : (
                  <h1>Restaurants</h1>
                )}
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default SearchResults;
