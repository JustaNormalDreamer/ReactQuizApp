import React from "react";
import { Questions } from "./components/";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";

export default function App() {
  return (
    <>
      <div className="container my-4 p-4">
        <div className="card">
          <div className="card-body">
            <h1>An open source quiz app</h1>
            <Questions />
          </div>
        </div>
      </div>
    </>
  );
}
