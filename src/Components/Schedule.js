import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Schedule.css";
import MealCard from "./MealCard";

class Schedule extends React.Component {
  render() {
    let days = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];
    let meals = ["Breakfast", "Lunch", "Dinner"];

    return (
      <Container className="Schedule mt-3">
        <Row>
          <Col className="xs-4 table-head text-center">Breakfast</Col>
          <Col className="xs-4 table-head text-center">Lunch</Col>
          <Col className="xs-4 table-head text-center">Dinner</Col>
        </Row>
        {days.map((day) => {
          return (
            <>
              <hr></hr>
              <Row key={day}>
                <div className="table-head">{day}</div>
                {meals.map((meal) => {
                  let lowerCaseMeal = meal.toLowerCase();
                  return (
                    <Col className="xs-4 td-parent" key={day + lowerCaseMeal}>
                      {this.props.meals[day][lowerCaseMeal] &&
                      (this.props.meals[day][lowerCaseMeal]
                        .analyzedInstructions ||
                        this.props.meals[day][lowerCaseMeal].readyInMinutes) ? (
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
                          restaurant={this.props.meals[day][lowerCaseMeal]}
                          key={this.props.meals[day][lowerCaseMeal].id}
                          isRemoval={true}
                          onRemove={this.props.onRemove}
                          day={day}
                          time={lowerCaseMeal}
                        />
                      ) : null}
                    </Col>
                  );
                })}
              </Row>
            </>
          );
        })}
      </Container>
    );
  }
}

export default Schedule;
