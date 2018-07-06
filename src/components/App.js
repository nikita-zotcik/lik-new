import React, { Component } from 'react';
import Step from './stepper';
import data from '../data.json';

document.body.style =`background: ${data.backgroundColor || '#fafafa'};`;

export default class App extends Component {
  render() {
    return (
        <Step/>
    );
  }
}