import React from 'react';
import Readme from 'raw!./README.md';
import Markdown from 'react-markdown';
class card extends React.Component {
  render() {
    return (
      <div id="card">
        <Markdown source={Readme} />
      </div>
    )
  }
}

export default card;
