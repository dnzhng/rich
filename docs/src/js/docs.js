import React from 'react';
import { RichChart, RichSideNav, NavItem } from '../../../src';
import { Link } from 'react-router';
import * as Documentation from './docs/';

class Docs extends React.Component {

  getActive() {
    let active = "overview";

    if (this.props.routes && this.props.routes[2] && this.props.routes[2].active) {
      active = this.props.routes[2].active;
    }

    return active;
  }

  render() {
    let active = this.getActive();
    let Child = Documentation[active];
    return (

      <div>
        <RichSideNav>
          <Link className="rich-nav-item rich-side-nav-header" to="/">Rich</Link>
          <Link className="rich-nav-item" to="/docs/d3">D3</Link>
          <Link className="rich-nav-item" to="/docs/banner">Banner</Link>
          <Link className="rich-nav-item" to="/docs/card">Card</Link>
          <Link className="rich-nav-item" to="/docs/nav">Nav</Link>
        </RichSideNav>
        <div className="rich-docs">
          <Child />
        </div>

      </div>



    )
  }
}

export default Docs;
