import React from 'react';
import Readme from 'raw!./README.md';
import Markdown from 'react-markdown';

class nav extends React.Component {
  render() {
    return (
      <div id="nav">
        <Markdown source={Readme} />
      </div>
    )
  }
}

export default nav;
