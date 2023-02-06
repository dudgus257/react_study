import React, { Component } from 'react';

class TOC extends Component {
  render() {
    console.log('TOC.js 렌더링 완료');
    return (
      <nav>
          <ul>
              <li><a href="1.html"
               onClick={function(e) {
                e.preventDefault();
                this.props.onChangePage(0);
              }.bind(this)}>HTML</a></li>
              <li><a href="2.html"
               onClick={function(e) {
                e.preventDefault();
                this.props.onChangePage(1);
              }.bind(this)}>CSS</a></li>
              <li><a href="3.html"
               onClick={function(e) {
              e.preventDefault();
              this.props.onChangePage(2);
            }.bind(this)}>JavaScript</a></li>
          </ul>
      </nav>
    );
  }
}

export default TOC; 
