import '../css/quote.css';
import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai'

const first_colors_array = [
  "#073763",
  "#4c1130",
  "#660000"
]

const colors_array = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857"
]

function Quote_show (props) {
  const tStyle = {
    color: props.color,
  };

  const rStyle = {
    backgroundColor: props.color,
  };

  let URL = 'https://twitter.com/intent/tweet?hashtags=quotes&text=' +
  encodeURIComponent('"' + props.random_quote + '" ' + props.author);

  return (
    <div className="quote-box">
      <div id="quote">
        <p id="text">{props.random_quote}</p>
        <p id="author"> - {props.author}</p>
      </div>
      <div className="button-box">
        <a id="tweet-quote" href={URL} target="_blank"><AiFillTwitterCircle style={tStyle}></AiFillTwitterCircle></a>      
        <button id="new-quote" onClick={props.quote_select} style={rStyle}>random</button>
      </div>
    </div>
  )
}

export default class Quote extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: "",
      quote: "",
      author: "",
      color: "#0c5a4a"
    }
    
    this.quote_select_first = this.quote_select_first.bind(this);
    this.quote_select = this.quote_select.bind(this);
  }

  componentDidMount(){
    let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

    var quotes_fetch = fetch(url)
    .then(res => res.json())
    
    //.then(res => {return (res)});

    var quotes_get = async () => {
        var quotes_array = await quotes_fetch;
        this.setState({quotes: quotes_array.quotes});
        this.quote_select_first();
    }

    quotes_get();
  }

  quote_select_first(){
    let number = Math.floor(Math.random() * this.state.quotes.length);
    let number_color = Math.floor(Math.random() * first_colors_array.length);

    this.setState({
      quote: this.state.quotes[number].quote,
      author: this.state.quotes[number].author,
      color: first_colors_array[number_color]
    });
  }

  quote_select(){
    let number = Math.floor(Math.random() * this.state.quotes.length);
    let number_color = Math.floor(Math.random() * colors_array.length);

    this.setState({
      quote: this.state.quotes[number].quote,
      author: this.state.quotes[number].author,
      color: colors_array[number_color]
    });
  }

  render () {
    const {quotes, quote, author, color} = this.state;

    const divStyle = {
      backgroundColor: color,
    };

    return (
      <div className="quoteMain" style={divStyle}>
        <Quote_show random_quote={quote} author={author} quote_select={this.quote_select} color={color}/>
      </div>
    );
  }
}