import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Mario Estrada Portfolio</h1>
        <div><h2>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h2></div>
      </div>
    );
  }
}
