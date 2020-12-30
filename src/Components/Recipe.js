import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import "./Recipe.css";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.addRecipe = this.addRecipe.bind(this);
    this.removeRecipe = this.removeRecipe.bind(this);
  }

  addRecipe() {
    this.props.onAdd(this.props.recipe);
  }

  removeRecipe() {
    this.props.onRemove(this.props.recipe);
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
        <Button
          className="Recipe-action float-right btn-sm"
          onClick={this.addRecipe}
        >
          +
        </Button>
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
