import React from "react";
import { Container, Row, Col, Table } from "reactstrap";
import "./Schedule.css";
import MealCard from "./MealCard";

class Schedule extends React.Component {
  render() {
    let days = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];
    let meals = ["Breakfast", "Lunch", "Dinner"];

    return (
      <Container className="Schedule">
        <Row>
          <Col xs="12" className="mt-3">
            <Table className="mx-auto">
              <thead>
                <tr>
                  <th></th>
                  <th>Breakfast</th>
                  <th>Lunch</th>
                  <th>Dinner</th>
                </tr>
              </thead>
              <tbody>
                {days.map((day) => {
                  return (
                    <tr>
                      <th scope="row">{day}</th>
                      {meals.map((meal) => {
                        let lowerCaseMeal = meal.toLowerCase();
                        return (
                          <td>
                            {this.props.meals[day][lowerCaseMeal] &&
                            (this.props.meals[day][lowerCaseMeal]
                              .analyzedInstructions ||
                              this.props.meals[day][lowerCaseMeal]
                                .readyInMinutes) ? (
                              <MealCard
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
