import React from 'react';
import NavItem from './NavItem';
import classNames from 'classnames';

/**
 * A nav bar that is pinned to the side of the screen
 */
class RichSideNav extends React.Component {
  static propTypes = {
    /**
     * Optional label as the first nav item in the side nav
     */
    header: React.PropTypes.string,
    /**
     * Optional href for clicking on the banner on the top of the side nav
     */
    href: React.PropTypes.string
  }

  render() {
    let header = this.props.header ?
    (
      <NavItem href={this.props.href} className="rich-side-nav-header">
        {this.props.header}
      </NavItem>
    ) : null;

    let richSideNav = classNames('rich-side-nav', this.props.className);

    return(
      <div className={richSideNav}>
        {header}
        {this.props.children}
      </div>
    )
  }
}

export default RichSideNav;
