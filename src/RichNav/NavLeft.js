import React from 'react';
import classNames from 'classnames';
/**
 * Child component of RichNav. All child components will be on the left side of the nav
 */
class NavLeft extends React.Component {
  render() {
    let clazz = classNames('rich-nav-left', this.props.className);
    return (
      <div className={clazz}>
        {this.props.children}
      </div>
    )
  }
}

export default NavLeft;
