import React, { Component } from 'react';

class TOC extends Component {
  render() {
    console.log('TOC.js 렌더링 완료');
    return (
      <nav>
          <ul>
              <li><a href="1.html">HTML</a></li>
              <li><a href="2.html">CSS</a></li>
              <li><a href="3.html">JavaScript</a></li>
          </ul>
      </nav>
    );
  }
}

export default TOC; 
