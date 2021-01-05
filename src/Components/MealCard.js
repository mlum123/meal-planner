// MealCard component, with contents dependent on the view (recipe, restaurant, or schedule)
import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "./MealCard.css";

class MealCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      day: this.props.day,
      time: this.props.time,
      modal: false,
      showDetails: false,
    };

    this.addMeal = this.addMeal.bind(this);
    this.removeMeal = this.removeMeal.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onHover = this.onHover.bind(this);
    this.onHoverLeave = this.onHoverLeave.bind(this);
  }

  addMeal() {
    if (this.props.recipe && this.state.day && this.state.time) {
      this.props.onAdd(this.props.recipe, this.state.day, this.state.time);
    } else if (this.props.restaurant && this.state.day && this.state.time) {
      this.props.onAdd(this.props.restaurant, this.state.day, this.state.time);
    }
    this.toggle();
  }

  removeMeal() {
    this.props.onRemove(this.state.day, this.state.time);
  }

  // to hide or reveal modal for putting recipe / restaurant in schedule
  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  // records user selection of day and time when user schedules recipe / restaurant for a meal
  handleChange(event) {
    let { name, value } = event.target;

    this.setState({ [name]: value });
  }

  // hover functions set state to show details about recipe when user hovers on recipe card
  onHover() {
    this.setState({ showDetails: this.props.key });
  }

  onHoverLeave() {
    this.setState({ showDetails: "" });
  }

  // if on schedule view, displays - button to delete meal card from schedule
  // if on search view, displays + button to add mael card to schedule
  renderAction() {
    if (this.props.isRemoval) {
      return (
        <Button
          color="danger"
          className="Meal-action float-right btn-sm"
          onClick={this.removeMeal}
        >
          -
        </Button>
      );
    } else {
      return (
        <div>
          <Button
            color="success"
            className="Meal-action float-right btn-sm"
            onClick={this.toggle}
          >
            +
          </Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader>
              Add {this.props.recipe ? "recipe" : "restaurant"} to meal schedule
            </ModalHeader>
            <ModalBody>
              <Container>
                <Row>
                  <Col xs="7">
                    <Form>
                      <FormGroup tag="fieldset">
                        <Label>Day</Label>
                        <FormGroup check>
                          <Label check>
                            <Input
                              type="radio"
                              name="day"
                              value="mon"
                              onChange={this.handleChange}
                            />
                            Monday
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input
                              type="radio"
                              name="day"
                              value="tues"
                              onChange={this.handleChange}
                            />
                            Tuesday
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input
                              type="radio"
                              name="day"
                              value="wed"
                              onChange={this.handleChange}
                            />
                            Wednesday
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input
                              type="radio"
                              name="day"
                              value="thurs"
                              onChange={this.handleChange}
                            />
                            Thursday
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input
                              type="radio"
                              name="day"
                              value="fri"
                              onChange={this.handleChange}
                            />
                            Friday
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input
                              type="radio"
                              name="day"
                              value="sat"
                              onChange={this.handleChange}
                            />
                            Saturday
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input
                              type="radio"
                              name="day"
                              value="sun"
                              onChange={this.handleChange}
                            />
                            Sunday
                          </Label>
                        </FormGroup>
                      </FormGroup>
                    </Form>
                  </Col>
                  <Col xs="5">
                    <Form>
                      <FormGroup tag="fieldset">
                        <Label>Meal</Label>
                        <FormGroup check>
                          <Label check>
                            <Input
                              type="radio"
                              name="time"
                              value="breakfast"
                              onChange={this.handleChange}
                            />
                            Breakfast
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input
                              type="radio"
                              name="time"
                              value="lunch"
                              onChange={this.handleChange}
                            />
                            Lunch
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input
                              type="radio"
                              name="time"
                              value="dinner"
                              onChange={this.handleChange}
                            />
                            Dinner
                          </Label>
                        </FormGroup>
                      </FormGroup>
                    </Form>
                  </Col>
                </Row>
              </Container>
              <Button
                color="primary"
                className="SearchButton float-right"
                onClick={this.addMeal}
              >
                add
              </Button>
            </ModalBody>
          </Modal>
        </div>
      );
    }
  }

  render() {
    return (
      <Col className="my-2">
        {this.props.recipe ? (
          <Card
            className="Meal h-100 w-100"
            onMouseEnter={this.onHover}
            onMouseLeave={this.onHoverLeave}
          >
            <div className="mx-auto">
              <CardImg
                src={this.props.recipe.image}
                alt="Meal img"
                className="card-img p-4"
              />
            </div>
            <CardBody>
              <Row>
                <Col xs="9">
                  <CardTitle tag="h5">{this.props.recipe.title}</CardTitle>
                </Col>
                <Col xs="3">{this.renderAction()}</Col>
              </Row>
              {this.state.showDetails === this.props.key ? (
                <div>
                  {this.props.recipe.sourceName ? (
                    <span>from {this.props.recipe.sourceName}</span>
                  ) : null}
                  {this.props.recipe.vegetarian ? (
                    <div>
                      vegetarian
                      <span></span> <i className="fas fa-carrot"></i>
                    </div>
                  ) : null}
                  {this.props.recipe.vegan ? (
                    <div>
                      vegan
                      <span></span> <i className="fas fa-seedling"></i>
                    </div>
                  ) : null}
                  {this.props.recipe.readyInMinutes ? (
                    <div>
                      ready in {this.props.recipe.readyInMinutes} min
                      <span></span> <i className="far fa-clock"></i>
                    </div>
                  ) : null}
                  {this.props.recipe.servings ? (
                    <div>{this.props.recipe.servings} servings</div>
                  ) : null}
                  <br></br>
                  {this.props.recipe.analyzedInstructions[0] ? (
                    <ul className="ingredients">
                      <span>Ingredients</span>
                      <br></br>
                      {this.props.recipe.analyzedInstructions[0].steps.map(
                        (step) => {
                          return step.ingredients.map((ingredient) => {
                            return "  |  " + ingredient.name;
                          });
                        }
                      )}
                    </ul>
                  ) : null}
                  {this.props.recipe.analyzedInstructions[0] ? (
                    <ol className="instructions">
                      <span>Steps</span>
                      {this.props.recipe.analyzedInstructions[0].steps.map(
                        (step) => {
                          return (
                            <div>
                              <li
                                key={this.props.recipe.id + step.number}
                              >{`${step.number}. ${step.step}`}</li>
                              <br></br>
                            </div>
                          );
                        }
                      )}
                    </ol>
                  ) : null}
                  {this.props.recipe.sourceUrl ? (
                    <Button href={this.props.recipe.sourceUrl} target="_blank">
                      Visit Recipe Website
                    </Button>
                  ) : null}
                </div>
              ) : null}
            </CardBody>
          </Card>
        ) : (
          <Card
            className="Meal h-100 w-100"
            onMouseEnter={this.onHover}
            onMouseLeave={this.onHoverLeave}
          >
            <div className="mx-auto">
              <CardImg
                src={this.props.restaurant.image}
                alt="Meal img"
                className="card-img"
              />
            </div>
            <CardBody className="card-body">
              <Row>
                <Col xs="9">
                  <CardTitle tag="h5">{this.props.restaurant.name}</CardTitle>
                </Col>
                <Col xs="3">{this.renderAction()}</Col>
              </Row>
              {this.props.view === "restaurant" ||
              this.state.showDetails === this.props.key ? (
                <div>
                  {this.props.restaurant.price
                    ? this.props.restaurant.price
                    : null}
                  {this.props.restaurant.rating ? (
                    <>
                      {" "}
                      | {this.props.restaurant.rating}{" "}
                      <i className="fas fa-star"></i>
                    </>
                  ) : null}
                  {!this.props.restaurant.price &&
                  !this.props.restaurant.rating ? (
                    <br></br>
                  ) : null}
                  <br></br>
                  {this.props.restaurant.transactions.length !== 0 ? (
                    <div>
                      |{" "}
                      {this.props.restaurant.transactions.map((transaction) => {
                        if (transaction === "restaurant_reservation") {
                          return <> reservation |</>;
                        }
                        return <> {transaction} |</>;
                      })}{" "}
                    </div>
                  ) : (
                    <br></br>
                  )}
                  <br></br>
                  {this.props.restaurant.location ? (
                    <div>
                      <i className="fas fa-map-marker-alt"></i>{" "}
                      {this.props.restaurant.location.address1
                        ? this.props.restaurant.location.address1
                        : null}
                      {this.props.restaurant.location.address2
                        ? this.props.restaurant.location.address2
                        : null}
                      {this.props.restaurant.location.address3
                        ? this.props.restaurant.location.address3
                        : null}
                      <br></br>
                      {this.props.restaurant.location.city
                        ? this.props.restaurant.location.city
                        : null}
                      ,{" "}
                      {this.props.restaurant.location.state
                        ? this.props.restaurant.location.state
                        : null}{" "}
                      {this.props.restaurant.location.zip_code
                        ? this.props.restaurant.location.zip_code
                        : null}
                    </div>
                  ) : null}
                  {this.props.restaurant.phone ? (
                    <div>
                      <i className="fas fa-phone"></i>{" "}
                      {this.props.restaurant.phone}
                    </div>
                  ) : (
                    <br></br>
                  )}
                  <br></br>
                  {this.props.restaurant.url ? (
                    <Button href={this.props.restaurant.url} target="_blank">
                      Visit Restaurant on Yelp
                    </Button>
                  ) : null}
                </div>
              ) : null}
            </CardBody>
          </Card>
        )}
      </Col>
    );
  }
}

export default MealCard;
