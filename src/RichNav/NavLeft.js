import React from 'react';

class NavLeft extends React.Component {
  render() {
    return (
      <div className={"rich-nav-left " + this.props.className}>
        {this.props.children}
      </div>
    )
  }
}

export default NavLeft;
