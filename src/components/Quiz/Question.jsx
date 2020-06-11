import React, { useState } from "react";
import { shuffle } from "../../utils/";

const Question = props => {
  const {
    question: { id, title, correct, options },
    check_answer,
    index
  } = props;

  //initiating the useState hooks variables
  const [answered, setAnswered] = useState();
  const [isCorrect, setIsCorrect] = useState();
  const [choosed, setChoosed] = useState();

  const check_the_answer = (id, answer) => {
    //setting whether the user has choosed an answer or not
    setAnswered(true);

    //setting the user choosed answer
    setChoosed(answer);

    //if a user answer is correct set the state to true
    if (check_answer(id, answer)) {
      setIsCorrect(true);
    }
  };

  /*
   * setting the questions options
   * with correct and incorrect ones
   */
  const set_the_options = () => {
    // if the user answered the question
    return answered ? (
      // if the answered question is correct
      isCorrect ? (
        <>
          <p className="">
            Correct Answer
            <button className="btn btn-success m-2">{correct}</button>
          </p>
        </>
      ) : (
        <div className="clearfix">
          <p className="float-left">
            Your Answer:
            <button className="btn btn-danger m-2">{choosed}</button>
          </p>
          <p className="float-right">
            Correct Answer is:
            <button className="btn btn-success m-2">{correct}</button>
          </p>
        </div>
      )
    ) : (
      shuffle(options).map(option => (
        <button
          key={option.id}
          className="btn btn-primary m-2"
          onClick={() => check_the_answer(id, option.answer)}
        >
          {option.answer}
        </button>
      ))
    );
  };

  return (
    <div className="border-bottom p-2 my-4">
      <h3>{index + ". " + title}</h3>
      <div className="px-4 mx-2">{set_the_options()}</div>
    </div>
  );
};

export default Question;
