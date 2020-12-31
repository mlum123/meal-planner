import React from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import Toggler from "./Components/Toggler";
import FailedSearch from "./Components/FailedSearch";
import Spoonacular from "./Spoonacular";
import Yelp from "./Yelp";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeSearchResults: [],
      restaurantSearchResults: [],
      meals: {
        mon: { breakfast: null, lunch: null, dinner: null },
        tues: { breakfast: null, lunch: null, dinner: null },
        wed: { breakfast: null, lunch: null, dinner: null },
        thurs: { breakfast: null, lunch: null, dinner: null },
        fri: { breakfast: null, lunch: null, dinner: null },
        sat: { breakfast: null, lunch: null, dinner: null },
        sun: { breakfast: null, lunch: null, dinner: null },
      },
    };
    this.addMeal = this.addMeal.bind(this);
    this.removeMeal = this.removeMeal.bind(this);
    this.recipeSearch = this.recipeSearch.bind(this);
    this.restaurantSearch = this.restaurantSearch.bind(this);
  }

  addMeal(meal, day, time) {
    let meals = this.state.meals;
    meals[day][time] = meal;
    this.setState({ meals: meals });
  }

  removeMeal(day, time) {
    let meals = this.state.meals;
    meals[day][time] = null;
    this.setState({ meals: meals });
  }

  recipeSearch(dish, ingredients, cuisine) {
    Spoonacular.recipeSearch(dish, ingredients, cuisine).then(
      (recipeSearchResults) => {
        if (recipeSearchResults.length === 0) {
          // no recipes found, display failure message
          this.setState({
            recipeSearchResults: [],
            failedSearch: true,
          });
        } else {
          this.setState({
            recipeSearchResults: recipeSearchResults,
            failedSearch: false,
          });
        }
      }
    );
  }

  restaurantSearch(restaurant, location, cuisine) {
    Yelp.restaurantSearch(restaurant, location, cuisine).then(
      (restaurantSearchResults) => {
        if (
          restaurantSearchResults === undefined ||
          restaurantSearchResults.length === 0
        ) {
          // no recipes found, display failure message
          this.setState({
            restaurantSearchResults: [],
            failedSearch: true,
          });
        } else {
          this.setState({
            restaurantSearchResults: restaurantSearchResults,
            failedSearch: false,
          });
        }
      }
    );
  }

  render() {
    return (
      <div className="App">
        <header>
          <Container>
            <Row>
              <Col xs="12" className="mt-3 text-center">
                <h1 className="font-weight-bold">meal planner</h1>
              </Col>
            </Row>
          </Container>
        </header>
        <Container>
          <Row>
            <Col xs="12">
              <Toggler
                meals={this.state.meals}
                onRecipeSearch={this.recipeSearch}
                onRestaurantSearch={this.restaurantSearch}
                onAdd={this.addMeal}
                onRemove={this.removeMeal}
                recipes={this.state.recipeSearchResults}
                restaurants={this.state.restaurantSearchResults}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12" className="text-center">
              {this.state.failedSearch ? <FailedSearch /> : null}
            </Col>
          </Row>
        </Container>
        <footer className="bg-light">
          <Container fluid="true">
            <p className="text-center p-5 mt-4">
              made with React, the Spoonacular API, and the Yelp Fusion API
            </p>
          </Container>
        </footer>
      </div>
    );
  }
}

export default App;
