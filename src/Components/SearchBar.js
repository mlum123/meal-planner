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
  render() {
    return (
      <div className="SearchBar">
        <header>
          <Container>
            <Row>
              <Col xs="12">
                {this.props.view === "recipe" ? (
                  <Form>
                    <FormGroup>
                      <Row>
                        <Col xs="3" md="2">
                          <Label for="ingredients">Ingredients</Label>
                        </Col>
                        <Col xs="9" md="10">
                          <Input
                            type="text"
                            name="ingredients"
                            id="ingredients"
                            placeholder="enter the ingredients you want to use, comma-separated"
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
                          <Input type="select" name="cuisine" id="cuisine">
                            <option>Chinese</option>
                            <option>Japanese</option>
                            <option>Korean</option>
                            <option>French</option>
                            <option>Italian</option>
                            <option>American</option>
                          </Input>
                        </Col>
                      </Row>
                    </FormGroup>
                  </Form>
                ) : (
                  <input
                    placeholder="Enter a restaurant"
                    onChange={this.handleTermChange}
                  />
                )}
                <Button className="SearchButton" onClick={this.search}>
                  SEARCH
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
