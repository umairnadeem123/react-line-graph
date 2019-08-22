import React, { Component } from 'react';
import { toBezier } from '../_helpers';

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(toBezier('45,50', '90,100', 0));
    return (
      <svg
        style={{ width: '100%', height: '100%' }}
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        {/* <path
          stroke="#000000"
          fill="none"
          strokeWidth="1"
          d={`M0,100 ${toBezier('0,100', '45,50', 25)} ${toBezier('45,50', '90,100', -25)}`}
        /> */}
        {/* <path
          stroke="#000000"
          fill="none"
          strokeWidth="1"
          d={`M0,100 ${toBezier('0,100', '22.5,75', 5)} ${toBezier('22.5,75', '45,50', 5)} ${toBezier('45,50', '67.5,75', 0)}${toBezier('67.5,75', '90,100', 5)}`}
        /> */}
        <g>
          <circle cx="100" cy="200" r="2" fill="red" />
          <circle cx="200" cy="100" r="2" fill="red" />
        </g>
      </svg>
    );
  }
}

export default LineGraph;
