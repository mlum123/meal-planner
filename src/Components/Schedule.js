import React from "react";
import { Container, Row, Col, Table } from "reactstrap";
import "./Schedule.css";
import Recipe from "./Recipe";

class Schedule extends React.Component {
  render() {
    let days = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];
    let meals = ["Breakfast", "Lunch", "Dinner"];

    return (
      <Container fluid={true} className="Schedule">
        <Row>
          <Col xs="12" className="mt-3">
            <Table className="mx-auto">
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
                {meals.map((meal) => {
                  let lowerCaseMeal = meal.toLowerCase();
                  return (
                    <tr>
                      <th scope="row">{meal}</th>
                      {days.map((day) => {
                        return (
                          <td>
                            {this.props.meals[day][lowerCaseMeal] ? (
                              <Recipe
                                recipe={this.props.meals[day][lowerCaseMeal]}
                                key={this.props.meals[day][lowerCaseMeal].id}
                                isRemoval={true}
                                onRemove={this.props.onRemove}
                                day={day}
                                time={lowerCaseMeal}
                              />
                            ) : null}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Schedule;
