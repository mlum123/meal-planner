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
                  <th className="text-center">Breakfast</th>
                  <th className="text-center">Lunch</th>
                  <th className="text-center">Dinner</th>
                </tr>
              </thead>
              <tbody>
                {days.map((day) => {
                  return (
                    <tr key={day}>
                      <th scope="row">{day}</th>
                      {meals.map((meal) => {
                        let lowerCaseMeal = meal.toLowerCase();
                        return (
                          <td key={day + lowerCaseMeal}>
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
                            {this.props.meals[day][lowerCaseMeal] &&
                            (this.props.meals[day][lowerCaseMeal].location ||
                              this.props.meals[day][lowerCaseMeal].price) ? (
                              <MealCard
                                restaurant={
                                  this.props.meals[day][lowerCaseMeal]
                                }
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
