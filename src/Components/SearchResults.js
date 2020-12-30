import React from "react";
import { Container, Row, Col, CardGroup } from "reactstrap";
import SearchBar from "./SearchBar";
import Recipe from "./Recipe";

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <header>
          <Container>
            <Row>
              <Col xs="12" className="mt-3">
                <SearchBar view={this.props.view} />
              </Col>
            </Row>
            <Row>
              <Col xs="12" className="mt-3">
                <CardGroup>
                  {this.props.view === "recipe" ? (
                    this.props.recipes.map((recipe) => {
                      return (
                        <Recipe
                          recipe={recipe}
                          key={recipe.id}
                          onAdd={this.props.onAdd}
                          isRemoval={false}
                        />
                      );
                    })
                  ) : (
                    <h1>Restaurants</h1>
                  )}
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default SearchResults;
