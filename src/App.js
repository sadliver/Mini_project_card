import React, { Component } from 'react';
import './App.css';
import { Card } from './Card_Book/Book';

class App extends React.Component {
  state = {
    card: [{
      pic: "https://www.detectiveconanworld.com/wiki/images/thumb/b/b1/Volume_1.jpg/577px-Volume_1.jpg",
      title: "โคนัน",
      content: "การ์ตูนทั่วไป",
    },
    {
      pic: "https://www.detectiveconanworld.com/wiki/images/thumb/b/b1/Volume_1.jpg/577px-Volume_1.jpg",
      title: "โคนัน",
      content: "การ์ตูนทั่วไป",
    },
    {
      pic: "https://www.detectiveconanworld.com/wiki/images/thumb/b/b1/Volume_1.jpg/577px-Volume_1.jpg",
      title: "โคนัน",
      content: "การ์ตูนทั่วไป",
    },
    {
      pic: "https://www.detectiveconanworld.com/wiki/images/thumb/b/b1/Volume_1.jpg/577px-Volume_1.jpg",
      title: "โคนัน",
      content: "การ์ตูนทั่วไป",
    },
    {
      pic: "https://www.detectiveconanworld.com/wiki/images/thumb/b/b1/Volume_1.jpg/577px-Volume_1.jpg",
      title: "โคนัน",
      content: "การ์ตูนทั่วไป",
    },
    {
      pic: "https://www.detectiveconanworld.com/wiki/images/thumb/b/b1/Volume_1.jpg/577px-Volume_1.jpg",
      title: "โคนัน",
      content: "การ์ตูนทั่วไป",
    },
    ]
  }

  render() {
    const card = this.state.card;

    return (
      <div className="App">

        <div className="Navbar"></div>
        <div className="Card">
          {card.map(obj => <Card pic={obj.pic} title={obj.title} content={obj.content} />)}

        </div>
      </div>
    );
  }
}

export default App;
