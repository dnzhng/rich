import React from 'react';

/**
 * Child component of RichNav. All child components will be on the right side of the nav
 */
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
