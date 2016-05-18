import React from 'react';
import { RichChart, RichSideNav, NavItem } from '../../../src';
import * as Documentation from './docs/';

class Docs extends React.Component {

  render() {
    let active = this.props.routes[1].active;
    let Child = Documentation[active];
    return (

      <div>
        <RichSideNav header="Rich">
          <NavItem href="/docs/d3">D3</NavItem>
          <NavItem href="/docs/banner">Banner</NavItem>
          <NavItem href="/docs/card">Card</NavItem>
          <NavItem href="/docs/nav">Nav</NavItem>
        </RichSideNav>
        <div className="rich-docs">
          <Child />
        </div>

      </div>



    )
  }
}

export default Docs;
