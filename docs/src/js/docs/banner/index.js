import React from 'react';
import Readme from 'raw!./Readme.md';
import Markdown from 'react-markdown';
class banner extends React.Component {
  render() {
    return (
      <div id="banner">
        <Markdown source={Readme} />
      </div>
    )
  }
}

export default banner;
