import React, { Component } from 'react';

class Subject extends Component {
  render() {
    console.log('Subject.js 렌더링 완료');
    return (
      <header>
          <h1><a href="/">{this.props.title}</a></h1>
          {this.props.sub}
      </header>  
    );
  }
}

export default Subject; 