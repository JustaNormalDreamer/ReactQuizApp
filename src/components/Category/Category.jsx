import React from "react";

const Category = props => {
  const {
    category: { id, title, description },
    on_click
  } = props;

  return (
    <div className="col-lg-3 col-md-6">
      <div className="card py-2 m-2" onClick={() => on_click(id)}>
        <div className="card-body text-center">
          <h4 className="">{title}</h4>
          <p className="lead">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
