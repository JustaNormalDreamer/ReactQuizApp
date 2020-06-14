import React, { Component } from "react";
import Question from "./Question";
import data from "../../dummy/questions.json";
import Timer from "../Timer/Timer";

import { shuffle } from "../../utils/";

class Questions extends Component {
  state = {
    score: 0,
    questions: [],
    total_questions: 0
  };

  /*
   * once the component is mounted
   */
  componentDidMount() {
    /*
     * filter the questions according to the category
     */
    const questions = data.filter(el => el.category_id === this.props.category);

    this.setState(
      {
        /*
         * a callback with setState i.e. once the state is set for questions
         * shuffle it into another state called shuffled
         */
        questions: shuffle(questions)
      },
      //once the questions are set to the state count the total questions
      () => this.update_total_questions()
    );
  }

  /*
   * checking whether the user answered is correct or not
   */
  check_answer = (id, choosed) => {
    const question = this.state.questions.find(el => el.id === id);
    if (question.correct.localeCompare(choosed)) {
      return false;
    }
    this.setState({
      score: this.state.score + 10
    });
    return true;
  };

  /*
   * updating the total_questions state
   */
  update_total_questions = () => {
    this.setState({
      total_questions: this.state.questions.length
    });
  };

  render() {
    const { questions, score, total_questions } = this.state;
    return (
      <>
        <h5>Please answer the questions below</h5>
        <div className="clearfix">
          <div className="float-right">
            {/* if the total question in greather than 0 display the timter else don't */}
            {total_questions > 0 ? (
              <Timer total_questions={total_questions} />
            ) : (
              ""
            )}
            <h3>
              <span className="badge badge-success">Score: {score}</span>
            </h3>
          </div>
        </div>
        {questions.length > 0 ? (
          questions.map((question, index) => (
            <Question
              key={question.id}
              index={++index}
              question={question}
              check_answer={this.check_answer}
            />
          ))
        ) : (
          <h3 className="">No questions found!</h3>
        )}
      </>
    );
  }
}

export default Questions;
