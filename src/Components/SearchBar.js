// SearchBar for Recipe Search and Restaurant Search views
import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dish: "",
      ingredients: "",
      cuisine: "",
      restaurant: "",
      location: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.recipeSearch = this.recipeSearch.bind(this);
    this.restaurantSearch = this.restaurantSearch.bind(this);
  }

  handleChange(event) {
    let { name, value } = event.target;

    this.setState({ [name]: value });
  }

  recipeSearch() {
    this.props.onRecipeSearch(
      this.state.dish,
      this.state.ingredients,
      this.state.cuisine
    );
  }

  restaurantSearch() {
    this.props.onRestaurantSearch(
      this.state.restaurant,
      this.state.location,
      this.state.cuisine
    );
  }

  render() {
    let firstInput;
    let secondInput;

    if (this.props.view === "recipe") {
      firstInput = "Dish";
      secondInput = "Ingredients";
    } else {
      firstInput = "Restaurant";
      secondInput = "Location";
    }

    const cuisines = [
      "Any",
      "African",
      "American",
      "British",
      "Cajun",
      "Caribbean",
      "Chinese",
      "Eastern European",
      "European",
      "French",
      "German",
      "Greek",
      "Indian",
      "Irish",
      "Italian",
      "Japanese",
      "Jewish",
      "Korean",
      "Latin American",
      "Mediterranean",
      "Mexican",
      "Middle Eastern",
      "Nordic",
      "Southern",
      "Spanish",
      "Thai",
      "Vietnamese",
    ];

    return (
      <div className="SearchBar">
        <header>
          <Container>
            <Row>
              <Col xs="12">
                <div>
                  <h2 className="mb-4">find a {this.props.view}</h2>
                  <Form id="SearchForm">
                    <FormGroup>
                      <Row>
                        <Col xs="3" md="2">
                          <Label for={firstInput.toLowerCase()}>
                            {firstInput}
                          </Label>
                        </Col>
                        <Col xs="9" md="10">
                          <Input
                            type="text"
                            name={firstInput.toLowerCase()}
                            defaultValue=""
                            id={firstInput.toLowerCase()}
                            placeholder={`enter ${firstInput.toLowerCase()} name`}
                            onChange={this.handleChange}
                          />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Col xs="3" md="2">
                          <Label for={secondInput.toLowerCase()}>
                            {secondInput}
                          </Label>
                        </Col>
                        <Col xs="9" md="10">
                          <Input
                            type="text"
                            name={secondInput.toLowerCase()}
                            defaultValue=""
                            id={secondInput.toLowerCase()}
                            placeholder={
                              this.props.view === "recipe"
                                ? "enter ingredients in a comma-separated list" /* TODO: shorten for small screens */
                                : "enter your city"
                            }
                            onChange={this.handleChange}
                          />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Col xs="3" md="2">
                          <Label for="cuisine">Cuisine</Label>
                        </Col>
                        <Col xs="9" md="10">
                          <Input
                            type="select"
                            name="cuisine"
                            defaultValue=""
                            id="cuisine"
                            onChange={this.handleChange}
                          >
                            {cuisines.map((cuisine) => {
                              return (
                                <option
                                  key={cuisine.toLowerCase()}
                                  value={cuisine.toLowerCase()}
                                >
                                  {cuisine}
                                </option>
                              );
                            })}
                          </Input>
                        </Col>
                      </Row>
                    </FormGroup>
                  </Form>
                </div>
                <Button
                  className="SearchButton float-right"
                  onClick={
                    this.props.view === "recipe"
                      ? this.recipeSearch
                      : this.restaurantSearch
                  }
                >
                  search
                </Button>
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default SearchBar;
