import React from 'react';

class NavItem extends React.Component {
  render() {
    return (
      <div className={'rich-nav-item ' + this.props.className}>
        <a href={this.props.href} >{this.props.children}</a>
      </div>
    )
  }
}

export default NavItem;
