import React from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import Toggler from "./Components/Toggler";

class App extends React.Component {
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
            <Row>
              <Col xs="12">
                <Toggler />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
