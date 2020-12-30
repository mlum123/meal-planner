import React from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import Toggler from "./Components/Toggler";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeSearchResults: [
        {
          vegetarian: true,
          vegan: true,
          glutenFree: true,
          dairyFree: true,
          aggregateLikes: 500,
          sourceName: "The Best Recipe Website",
          id: 1123,
          title: "Recipe 1",
          readyInMinutes: 30,
          servings: 2,
          sourceUrl: "https://www.allrecipes.com/",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
          summary: "Summary summary summary",
          analyzedInstructions: [
            {
              steps: [
                {
                  number: 1,
                  ingredients: [
                    { id: 10011, name: "cauliflower" },
                    { id: 101, name: "rice" },
                  ],
                  step: "chop onions",
                  equipment: [{ id: 123124, name: "food processor" }],
                },
                {
                  number: 2,
                  ingredients: [
                    { id: 1067, name: "garlic" },
                    { id: 161, name: "powder" },
                  ],
                  step: "boil",
                  equipment: [{ id: 3451, name: "pot" }],
                },
                {
                  number: 3,
                  ingredients: [
                    { id: 14, name: "oil" },
                    { id: 141, name: "water" },
                  ],
                  step: "simmer",
                  equipment: [{ id: 13451, name: "spoon" }],
                },
              ],
            },
          ],
        },
        {
          vegetarian: true,
          vegan: true,
          glutenFree: true,
          dairyFree: true,
          aggregateLikes: 500,
          sourceName: "The Best Recipe Website",
          id: 13,
          title: "Recipe 1",
          readyInMinutes: 30,
          servings: 2,
          sourceUrl: "https://www.allrecipes.com/",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
          summary: "Summary summary summary",
          analyzedInstructions: [
            {
              steps: [
                {
                  number: 1,
                  ingredients: [
                    { id: 10011, name: "cauliflower" },
                    { id: 101, name: "rice" },
                  ],
                  step: "chop onions",
                  equipment: [{ id: 123124, name: "food processor" }],
                },
                {
                  number: 2,
                  ingredients: [
                    { id: 1067, name: "garlic" },
                    { id: 161, name: "powder" },
                  ],
                  step: "boil",
                  equipment: [{ id: 3451, name: "pot" }],
                },
                {
                  number: 3,
                  ingredients: [
                    { id: 14, name: "oil" },
                    { id: 141, name: "water" },
                  ],
                  step: "simmer",
                  equipment: [{ id: 13451, name: "spoon" }],
                },
              ],
            },
          ],
        },
        {
          vegetarian: true,
          vegan: true,
          glutenFree: true,
          dairyFree: true,
          aggregateLikes: 500,
          sourceName: "The Best Recipe Website",
          id: 31,
          title: "Recipe 1",
          readyInMinutes: 30,
          servings: 2,
          sourceUrl: "https://www.allrecipes.com/",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
          summary: "Summary summary summary",
          analyzedInstructions: [
            {
              steps: [
                {
                  number: 1,
                  ingredients: [
                    { id: 10011, name: "cauliflower" },
                    { id: 101, name: "rice" },
                  ],
                  step: "chop onions",
                  equipment: [{ id: 123124, name: "food processor" }],
                },
                {
                  number: 2,
                  ingredients: [
                    { id: 1067, name: "garlic" },
                    { id: 161, name: "powder" },
                  ],
                  step: "boil",
                  equipment: [{ id: 3451, name: "pot" }],
                },
                {
                  number: 3,
                  ingredients: [
                    { id: 14, name: "oil" },
                    { id: 141, name: "water" },
                  ],
                  step: "simmer",
                  equipment: [{ id: 13451, name: "spoon" }],
                },
              ],
            },
          ],
        },
      ],
      restaurantSearchResults: [],
      meals: {
        mon: {
          breakfast: {
            vegetarian: true,
            vegan: true,
            glutenFree: true,
            dairyFree: true,
            aggregateLikes: 500,
            sourceName: "The Best Recipe Website",
            id: 31,
            title: "Recipe 11o2u312",
            readyInMinutes: 30,
            servings: 2,
            sourceUrl: "https://www.allrecipes.com/",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
            summary: "Summary summary summary",
            analyzedInstructions: [
              {
                steps: [
                  {
                    number: 1,
                    ingredients: [
                      { id: 10011, name: "cauliflower" },
                      { id: 101, name: "rice" },
                    ],
                    step: "chop onions",
                    equipment: [{ id: 123124, name: "food processor" }],
                  },
                  {
                    number: 2,
                    ingredients: [
                      { id: 1067, name: "garlic" },
                      { id: 161, name: "powder" },
                    ],
                    step: "boil",
                    equipment: [{ id: 3451, name: "pot" }],
                  },
                  {
                    number: 3,
                    ingredients: [
                      { id: 14, name: "oil" },
                      { id: 141, name: "water" },
                    ],
                    step: "simmer",
                    equipment: [{ id: 13451, name: "spoon" }],
                  },
                ],
              },
            ],
          },
          lunch: null,
          dinner: null,
        },
        tues: { breakfast: "waffles", lunch: null, dinner: null },
        wed: { breakfast: "pancakes", lunch: null, dinner: null },
        thurs: { breakfast: "sandwich", lunch: null, dinner: null },
        fri: { breakfast: "cereal", lunch: null, dinner: null },
        sat: { breakfast: "fish", lunch: null, dinner: null },
        sun: { breakfast: "rice", lunch: null, dinner: null },
      },
    };
    this.addMeal = this.addMeal.bind(this);
    this.removeMeal = this.removeMeal.bind(this);
  }

  addMeal(meal, day, time) {
    let meals = this.state.meals;
    meals[day][time] = meal;
    this.setState({ meals: meals });
    console.log(meals);
  }

  removeMeal(day, time) {
    console.log(this.state.meals);
    let meals = this.state.meals;
    meals[day][time] = null;
    this.setState({ meals: meals });
    console.log(meals);
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
                onAdd={this.addMeal}
                onRemove={this.removeMeal}
                recipes={this.state.recipeSearchResults}
              />
            </Col>
          </Row>
        </Container>
        <footer className="mb-0 bg-light">
          <Container fluid="true">
            <p className="text-center p-5 mt-4">
              made with React, the Spoonacular API, and the Zomato API
            </p>
          </Container>
        </footer>
      </div>
    );
  }
}

export default App;
