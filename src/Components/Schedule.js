import React from "react";
import { Container, Row, Col, Table } from "reactstrap";
import "./Schedule.css";
import Recipe from "./Recipe";

class Schedule extends React.Component {
  render() {
    return (
      <div className="Schedule">
        <header>
          <Container>
            <Row>
              <Col xs="12" className="mt-3">
                <Table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Monday</th>
                      <th>Tuesday</th>
                      <th>Wednesday</th>
                      <th>Thursday</th>
                      <th>Friday</th>
                      <th>Saturday</th>
                      <th>Sunday</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Breakfast</th>
                      <td>
                        {this.props.meals.mon.breakfast ? (
                          <Recipe
                            recipe={this.props.meals.mon.breakfast}
                            key={this.props.meals.mon.breakfast.id}
                            isRemoval={true}
                            onRemove={this.props.onRemove}
                            day="mon"
                            time="breakfast"
                          />
                        ) : null}
                      </td>
                      <td>{this.props.meals.tues.breakfast}</td>
                      <td>{this.props.meals.wed.breakfast}</td>
                      <td>{this.props.meals.thurs.breakfast}</td>
                      <td>{this.props.meals.fri.breakfast}</td>
                      <td>{this.props.meals.sat.breakfast}</td>
                      <td>{this.props.meals.sun.breakfast}</td>
                    </tr>
                    <tr>
                      <th scope="row">Lunch</th>
                      <td>{this.props.meals.mon.lunch}</td>
                      <td>{this.props.meals.tues.lunch}</td>
                      <td>{this.props.meals.wed.lunch}</td>
                      <td>{this.props.meals.thurs.lunch}</td>
                      <td>{this.props.meals.fri.lunch}</td>
                      <td>{this.props.meals.sat.lunch}</td>
                      <td>{this.props.meals.sun.lunch}</td>
                    </tr>
                    <tr>
                      <th scope="row">Dinner</th>
                      <td>{this.props.meals.mon.dinner}</td>
                      <td>{this.props.meals.tues.dinner}</td>
                      <td>{this.props.meals.wed.dinner}</td>
                      <td>{this.props.meals.thurs.dinner}</td>
                      <td>{this.props.meals.fri.dinner}</td>
                      <td>{this.props.meals.sat.dinner}</td>
                      <td>{this.props.meals.sun.dinner}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default Schedule;
