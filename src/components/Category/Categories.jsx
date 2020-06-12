import React, { Component } from "react";
import categories from "../../dummy/categories.json";
import Category from "./Category";

class Categories extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    this.setState({
      categories
    });
  }

  /*
   * passing the user selected category id to the props of the parent here
   * parent is App
   */
  choosed_category = id => {
    this.props.set_category(id);
  };

  render_categories = () => {
    return (
      <div className="row">
        {categories.map((category, index) => (
          <Category
            key={index}
            category={category}
            on_click={this.choosed_category}
          />
        ))}
      </div>
    );
  };

  render() {
    return (
      <>
        <h5>Please choose your category.</h5>
        {this.render_categories()}
      </>
    );
  }
}

export default Categories;
