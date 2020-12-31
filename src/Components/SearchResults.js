import React from "react";
import { Container, Row, Col, CardDeck } from "reactstrap";
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
                <SearchBar
                  view={this.props.view}
                  onRecipeSearch={this.props.onRecipeSearch}
                />
              </Col>
            </Row>
            <CardDeck className="mt-3">
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
            </CardDeck>
          </Container>
        </header>
      </div>
    );
  }
}

export default SearchResults;
