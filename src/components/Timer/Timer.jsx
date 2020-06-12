import React, { Component } from "react";

class Timer extends Component {
  timeout = 0;

  state = {
    timer: 0
  };

  componentDidMount() {
    this.timeout = setInterval(this.update, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  update = () => {
    let t = this.state.timer;
    this.setState({
      timer: t + 1
    });
  };

  render() {
    const { timer } = this.state;
    return (
      <>
        <h1>{`${timer}s`}</h1>
      </>
    );
  }
}

export default Timer;
