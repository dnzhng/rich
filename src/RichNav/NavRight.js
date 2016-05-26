import React from 'react';
import classNames from 'classnames';
/**
 * Child component of RichNav. All child components will be on the right side of the nav
 */
class NavRight extends React.Component {
  render() {
    let clazz = classNames('rich-nav-right', this.props.className);

    return (
      <div className={clazz}>
        {this.props.children}
      </div>
    )
  }
}

export default NavRight;
