import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    credit: "Alok Shete",
    preResult: null,
    expression: "",
    size: 45,
  };

  onClicked = (num) => {
    var add = this.state.expression;
    add = add.concat(num);
    if (add.length < 28) {
      var size = 45;
      size = size - add.length - 3;
    } else {
      size = this.state.size;
    }

    this.setState({
      preResult: this.state.preResult,
      expression: add,
      size: size,
    });
  };

  onClear = () => {
    this.setState({
      preResult: "",
      expression: "",
    });
  };

  onCE = () => {
    if (this.state.expression !== "" || this.state.expression !== "0") {
      var rem = this.state.expression;
      rem = rem.substring(0, rem.length - 1);
      var size = 45;
      size = size - rem.length - 3;
      this.setState({
        preResult: this.state.preResult,
        expression: rem,
        size: size,
      });
    }
  };

  onTotal = () => {
    try {
      var cal = this.state.expression;
      cal = eval(cal);
      cal = cal.toString();
      if (cal.length < 28) {
        var size = 45;
        size = size - cal.length - 3;
      } else {
        size = this.state.size;
      }
      this.setState({
        preResult: this.state.expression,
        expression: cal,
        size: size,
      });
    } catch (error) {
      this.setState({
        preResult: this.state.expression,
        expression: "Error",
        size: 45,
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="calc-body">
          <div className="calc-screen">
            <div className="calc-operation">
              {this.state.preResult ? this.state.preResult : this.state.credit}
            </div>
            <div className="calc-typed" style={{ fontSize: this.state.size }}>
              {this.state.expression ? this.state.expression : "0"}
              <span className="blink-me">_</span>
            </div>
          </div>
          <div className="calc-button-row">
            <div className="button c" onClick={this.onClear.bind(this)}>
              C
            </div>
            <div className="button l" onClick={this.onClicked.bind(this, "**")}>
              ^
            </div>
            <div className="button l" onClick={this.onClicked.bind(this, "%")}>
              %
            </div>
            <div className="button l" onClick={this.onCE.bind(this)}>
              CE
            </div>
          </div>
          <div className="calc-button-row">
            <div className="button" onClick={this.onClicked.bind(this, "7")}>
              7
            </div>
            <div className="button" onClick={this.onClicked.bind(this, "8")}>
              8
            </div>
            <div className="button" onClick={this.onClicked.bind(this, "9")}>
              9
            </div>
            <div className="button l" onClick={this.onClicked.bind(this, "/")}>
              /
            </div>
          </div>
          <div className="calc-button-row">
            <div className="button" onClick={this.onClicked.bind(this, "4")}>
              4
            </div>
            <div className="button" onClick={this.onClicked.bind(this, "5")}>
              5
            </div>
            <div className="button" onClick={this.onClicked.bind(this, "6")}>
              6
            </div>
            <div className="button l" onClick={this.onClicked.bind(this, "*")}>
              x
            </div>
          </div>
          <div className="calc-button-row">
            <div className="button" onClick={this.onClicked.bind(this, "1")}>
              1
            </div>
            <div className="button" onClick={this.onClicked.bind(this, "2")}>
              2
            </div>
            <div className="button" onClick={this.onClicked.bind(this, "3")}>
              3
            </div>
            <div className="button l" onClick={this.onClicked.bind(this, "-")}>
              -
            </div>
          </div>
          <div className="calc-button-row">
            <div className="button" onClick={this.onClicked.bind(this, "0")}>
              0
            </div>
            <div className="button" onClick={this.onClicked.bind(this, ".")}>
              .
            </div>
            <div className="button" onClick={this.onTotal.bind(this)}>
              =
            </div>
            <div className="button l" onClick={this.onClicked.bind(this, "+")}>
              +
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
