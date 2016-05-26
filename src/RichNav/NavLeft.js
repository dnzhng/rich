import React from 'react';
import classNames from 'classnames';
/**
 * Child component of RichNav. All child components will be on the left side of the nav
 */
class NavLeft extends React.Component {

  static propTypes = {
    /**
     * Optional extra classes passed in
     */
    className: React.PropTypes.string,
    /**
     * Optional children to be nested in banner
     */
    children: React.PropTypes.node
  }

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
