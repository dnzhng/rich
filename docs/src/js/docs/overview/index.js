import React from 'react';
import Readme from 'raw!./README.md';
import Markdown from 'react-markdown';

class overview extends React.Component {
  render() {
    return (
      <div id="overview">
        <Markdown source={Readme} />
      </div>
    )
  }
}

export default overview;
