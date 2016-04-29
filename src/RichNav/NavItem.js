import React from 'react';
import classNames from 'classnames';
class NavItem extends React.Component {
  render() {
    let clazz = classNames('rich-nav-item', this.props.className);
    return (
      <a className={clazz} href={this.props.href}>
        {this.props.children}
      </a>
    )
  }
}

export default NavItem;
