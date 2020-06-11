import React, { useState } from "react";
import { Questions, Categories } from "./components/";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";

const App = () => {
  const [category, setCategory] = useState();

  /*
   * toggles the questions and categories
   * if the category is empty display the choose category option else display
   * the relative questions based on their id
   */
  const toggler = () => {
    return category ? (
      <>
        <button
          className="btn btn-primary float-right"
          // if the choose category button is pressed set the state to false
          // so that the choose category is shown
          onClick={() => setCategory(false)}
        >
          Choose Category
        </button>
        <Questions category={category} />
      </>
    ) : (
      <Categories set_category={id => setCategory(id)} />
    );
  };

  return (
    <>
      <div className="container my-4 p-4">
        <div className="card">
          <div className="card-body">
            <h1>An open source quiz app</h1>
            {toggler()}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
