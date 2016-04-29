import React from 'react';
import NavItem from './NavItem';

class RichSideNav extends React.Component {
  static propTypes = {
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
