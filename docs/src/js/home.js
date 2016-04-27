import React from 'react';
import { Link } from 'react-router';
import { RichBanner, RichNav, NavRight, NavItem } from '../../../src'

class Home extends React.Component {

  render() {
    return (
      <div className="rich-home">
        <RichNav height={80} >
          <NavRight>
            <NavItem href="/">Get Started</NavItem>
            <NavItem href="/docs">Docs</NavItem>
            <NavItem href="https://github.ibm.com/zhangda/rich">GitHub</NavItem>
          </NavRight>
        </RichNav>
        <RichBanner className="brand" height={50} >
          <h1 className="brand-logo">Rich</h1>
          <h3 className="brand-description">A React component library to
            <br/>
            help you build your applications</h3>
        </RichBanner>
      </div>
    )
  }
}

export default Home
