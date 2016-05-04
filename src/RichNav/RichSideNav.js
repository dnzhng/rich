import React from 'react';
import NavItem from './NavItem';

/**
 * A nav bar that is pinned to the side of the screen
 */
class RichSideNav extends React.Component {
  static propTypes = {
    /**
     * Optional label as the first nav item in the side nav
     */
    header: React.PropTypes.string
  }

  render() {
    return(
      <div className={"rich-side-nav"}>
        <NavItem href="/" className="rich-side-nav-header">
          {this.props.header}
        </NavItem>
        {this.props.children}
      </div>
    )
  }
}

export default RichSideNav;
