import React from 'react';

/**
 * Child component of RichNav. All child components will be on the left side of the nav
 */
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
