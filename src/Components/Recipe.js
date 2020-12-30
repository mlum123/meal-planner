import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "./Recipe.css";

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      day: this.props.day,
      time: this.props.time,
      modal: false,
    };

    this.addRecipe = this.addRecipe.bind(this);
    this.removeRecipe = this.removeRecipe.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addRecipe() {
    this.props.onAdd(this.props.recipe, this.state.day, this.state.time);
    this.toggle();
  }

  removeRecipe() {
    this.props.onRemove(this.state.day, this.state.time);
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  handleChange(event) {
    let { name, value } = event.target;

    this.setState({ [name]: value });
  }

  renderAction() {
    if (this.props.isRemoval) {
      return (
        <Button
          className="Recipe-action float-right btn-sm"
          onClick={this.removeRecipe}
        >
          -
        </Button>
      );
    } else {
      return (
        <div>
          <Button
            className="Recipe-action float-right btn-sm"
            onClick={this.toggle}
          >
            +
          </Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader>Add recipe to meal schedule</ModalHeader>
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
              <Button className="SearchButton" onClick={this.addRecipe}>
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
      <Card className="Recipe mx-2">
        <CardImg
          top
          width="100%"
          src={this.props.recipe.image}
          alt="Card image cap"
        />
        <CardBody className="Recipe-information">
          <CardTitle tag="h5">
            {this.props.recipe.title}
            {this.renderAction()}
          </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {this.props.recipe.sourceName} {this.props.recipe.summary}
          </CardSubtitle>
          <ul className="ingredients">
            <li>ingredient 1</li>
            <li>ingredient 2</li>
          </ul>
          <ol className="instructions">
            {this.props.recipe.analyzedInstructions[0].steps.map((step) => {
              return (
                <li
                  key={this.props.recipe.id + step.number}
                >{`${step.number}. ${step.step}`}</li>
              );
            })}
          </ol>
          <Button href={this.props.recipe.sourceUrl} target="_blank">
            Visit Recipe Website
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default Recipe;
