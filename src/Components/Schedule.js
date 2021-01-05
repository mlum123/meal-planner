// Schedule component for meal schedule view, responsive
import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Schedule.css";
import MealCard from "./MealCard";

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = { smallScreen: false };

    this.updateScreenSize = this.updateScreenSize.bind(this);
  }

  componentDidMount() {
    this.updateScreenSize();
    window.addEventListener("resize", this.updateScreenSize);
  }

  componentWillUnmount() {
    this.updateScreenSize();
    window.removeEventListener("resize", this.updateScreenSize);
  }

  updateScreenSize() {
    this.setState({ smallScreen: window.innerWidth < 992 });
  }

  render() {
    let days = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];
    let meals = ["Breakfast", "Lunch", "Dinner"];

    // display only 1 col in each row if screen size < 992px; otherwise, display 3-col table
    return this.state.smallScreen ? (
      <Container className="Schedule mt-3">
        {days.map((day) => {
          return (
            <>
              <Row key={day}>
                <Col className="table-head text-center">{day}</Col>
              </Row>
              <hr></hr>
              {meals.map((meal) => {
                let lowerCaseMeal = meal.toLowerCase();
                return (
                  <>
                    <Row className="align-items-center">
                      <div className="table-head">{lowerCaseMeal}</div>
                      <Col
                        className="offset-2 td-parent"
                        key={day + lowerCaseMeal}
                      >
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
                            restaurant={this.props.meals[day][lowerCaseMeal]}
                            key={this.props.meals[day][lowerCaseMeal].id}
                            isRemoval={true}
                            onRemove={this.props.onRemove}
                            day={day}
                            time={lowerCaseMeal}
                          />
                        ) : null}
                      </Col>{" "}
                    </Row>
                    <br></br>
                  </>
                );
              })}
            </>
          );
        })}
      </Container>
    ) : (
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
