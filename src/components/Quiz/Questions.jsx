import React, { Component } from "react";
import Question from "./Question";

import data from "../../dummy/data.json";

import { shuffle } from "../../utils/";

class Questions extends Component {
  state = {
    score: 0,
    questions: []
  };

  /*
   * once the component is mounted
   */
  componentDidMount() {
    this.setState({
      /*
       * a callback with setState i.e. once the state is set for questions
       * shuffle it into another state called shuffled
       */
      questions: shuffle(data)
    });
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

  render() {
    const { questions, score } = this.state;
    return (
      <>
        <h5>Please answer the questions below</h5>
        <div className="clearfix">
          <h3 className="float-right">
            <span className="badge badge-success">Score: {score}</span>
          </h3>
        </div>
        {questions.map((question, index) => (
          <Question
            key={question.id}
            index={++index}
            question={question}
            check_answer={this.check_answer}
          />
        ))}
      </>
    );
  }
}

export default Questions;
