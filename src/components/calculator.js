import '../css/calculator.css';
import React from 'react';

class Pad extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: 0,
      state: 0
    }

    this.clear = this.clear.bind(this);
    this.cancel = this.cancel.bind(this);
    this.update = this.update.bind(this);
    this.equal = this.equal.bind(this);
  }

  clear() {
    this.setState({
      input: 0,
      state: 0
    })
  }

  cancel() {
    let whole = this.state.input.toString();

    if (whole.length > 1){
      this.setState({
        input: whole.slice(0, whole.length-1)
      })
    }
    else{
      this.setState({
        input: 0
      })
    }
  }

  update(key) {
    let whole = this.state.input.toString();
    let last_character = whole.slice(whole.length-1);
    let last_two_character = whole.slice(whole.length-2);

    let last_number = whole.split(/[+/*-]/g);
    last_number = last_number[last_number.length - 1];

    //prevent multiple zero at beginning
    if(this.state.input === 0 && key === 0) {
      return;
    }
    //prevent operator & zero at beginning
    else if (this.state.input === 0 &&
        (key !== "+") && 
        (key !== "*") &&
        (key !== "/")){
      this.setState({
        input: key.toString()
      })
    }
    //prevent multiple decimal in one number
    else if(last_number.includes('.') && key === ".") {
      return;
    }
    //prevent +-+ +-* +-/
    else if(last_two_character.includes('-') && 
            (key === "+" ||
             key === "*" ||
             key === "/") && !(/\d/.test(last_two_character))) {
      let input_trim = whole.slice(0, whole.length-2);
      this.setState({
        input: input_trim + key.toString()
      })
    }
    //prevent multiple 0 | multiple operator
    else if((last_character === "+" ||
             last_character === "-" ||
             last_character === "*" ||
             last_character === "/" ) && 
             (key === "+" ||
              key === "*" ||
              key === "/")) {
      let input_trim = whole.slice(0, whole.length-1);
      this.setState({
        input: input_trim + key.toString()
      })
    }
    //prevent operator after .
    else if (last_character === "." && 
             (key === "+" ||
              key === "-" ||
              key === "*" ||
              key === "/" ||
              key === ".")) {
      return;
    }
    //prevent multiple --
    else if(last_character === "-" && key === "-") {
      return;
    }
    else{
      //last calculation is error
      if (this.state.state === 1){
        //prevent operator
        if (key === "+" ||
            key === "*" ||
            key === "/"){
          return;
        }
        else {
          this.setState({
            input: key.toString(),
            state: 0
          })
        }
      }
      //operator right after last calculation
      else if (this.state.state === 2 && 
               (key === "+" ||
                key === "-" ||
                key === "*" ||
                key === "/" ||
                key === ".")){
        this.setState({
          input: this.state.input + key.toString(),
          state: 0
        })
      }
      //normal
      else if (this.state.state === 0){
        this.setState({
          input: this.state.input + key.toString(),
        })
      }
      //number right after last calculation
      else {
        this.setState({
          input: key.toString(),
          state: 0
        })
      }
    }
  }

  equal(){

    try {
      eval(this.state.input);
    } catch (e) {
      if (e instanceof SyntaxError) {
        this.setState({
          input: "error",
          state: 1
        })
      }
    }
    finally{
      this.setState({
        input: eval(this.state.input),
        state: 2
      })
    }
  }

  render(){
    return(
      <div className="container">
        <div className="container-one">
          <div id="display">{this.state.input}</div>
          <a id="name">calculator</a>
          <button id="clear" onClick={this.clear}>AC</button>
          <button id="cancel" onClick={this.cancel}>CE</button>
        </div>
        <div className="container-two">
          <button id="zero" onClick={() => this.update(0)}>0</button>
          <button id="one" onClick={() => this.update(1)}>1</button>
          <button id="two" onClick={() => this.update(2)}>2</button>
          <button id="three" onClick={() => this.update(3)}>3</button>
          <button id="four" onClick={() => this.update(4)}>4</button>
          <button id="five" onClick={() => this.update(5)}>5</button>
          <button id="six" onClick={() => this.update(6)}>6</button>
          <button id="seven" onClick={() => this.update(7)}>7</button>
          <button id="eight" onClick={() => this.update(8)}>8</button>
          <button id="nine" onClick={() => this.update(9)}>9</button>
          <button id="add" onClick={() => this.update('+')}>+</button>
          <button id="subtract" onClick={() => this.update('-')}>-</button>
          <button id="multiply" onClick={() => this.update('*')}>x</button>
          <button id="divide" onClick={() => this.update('/')}>/</button>
          <button id="decimal" onClick={() => this.update('.')}>.</button>
          <button id="equals" onClick={this.equal}>=</button>
        </div>
      </div>
    )
  }
}

export class Calculator extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render () {

    return (
      <div className="Calculator">
        <Pad/>
      </div>
    );
  }
}