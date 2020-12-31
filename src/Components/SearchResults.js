import React from "react";
import { Container, Row, Col, CardDeck } from "reactstrap";
import SearchBar from "./SearchBar";
import MealCard from "./MealCard";

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
              {this.props.view === "recipe"
                ? this.props.recipes.map((recipe) => {
                    return (
                      <MealCard
                        recipe={recipe}
                        key={recipe.id}
                        onAdd={this.props.onAdd}
                        isRemoval={false}
                      />
                    );
                  })
                : this.props.restaurants.map((restaurant) => {
                    console.log(restaurant);
                    return (
                      <MealCard
                        restaurant={restaurant}
                        key={restaurant.id}
                        onAdd={this.props.onAdd}
                        isRemoval={false}
                      />
                    );
                  })}
            </CardDeck>
          </Container>
        </header>
      </div>
    );
  }
}

export default SearchResults;
