// SearchResults component displays recipe or restaurant SearchBar and cards depending on the view props
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
                  onRestaurantSearch={this.props.onRestaurantSearch}
                  dish=""
                  ingredients=""
                  cuisine=""
                  restaurant=""
                  location=""
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
                        view={this.props.view}
                      />
                    );
                  })
                : this.props.restaurants.map((restaurant) => {
                    return (
                      <MealCard
                        restaurant={restaurant}
                        key={restaurant.id}
                        onAdd={this.props.onAdd}
                        isRemoval={false}
                        view={this.props.view}
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
