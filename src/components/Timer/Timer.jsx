import React, { Component } from "react";

class Timer extends Component {
  timeout = 0;

  state = {
    timer: this.props.total_questions * 20
  };

  componentDidMount() {
    this.timeout = setInterval(this.update, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  update = () => {
    let t = this.state.timer;
    if (t > 0) {
      this.setState({
        timer: t - 1
      });
    }
  };

  render() {
    const { timer } = this.state;
    return <>{timer > 0 ? <h1>{`${timer}s`}</h1> : <h3>Time Expired!</h3>}</>;
  }
}

export default Timer;
