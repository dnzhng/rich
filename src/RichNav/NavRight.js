import React from 'react';

class NavRight extends React.Component {
  render() {
    return (
      <div className={"rich-nav-right " + this.props.className}>
        {this.props.children}
      </div>
    )
  }
}

export default NavRight;
