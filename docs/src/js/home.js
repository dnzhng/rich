import React from 'react';
import { Link } from 'react-router';
import { RichBanner, RichNav, RichCard, NavRight, NavItem } from '../../../src'

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
        <div className="row">
          <RichCard className="col flexbox" imageUrl={"https://mdn.mozillademos.org/files/3829/HTML5_Styling_512.png"}>
            <p>
              Takes advantage of CSS3's <em>Flexbox</em> to help easily create complex layouts.
            </p>
          </RichCard>
          <RichCard className="col sass" imageUrl={"http://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png"}>
            <p>
              Styling is precompiled with <em>Sass</em> for fully modular and easily customizable styles.
            </p>
          </RichCard>
          <RichCard className="col d3" imageUrl={"https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Logo_D3.svg/256px-Logo_D3.svg.png"}>
            <p>
              Has chart components implemented in <em>d3</em> for interactive data visualizations.
            </p>
          </RichCard>
        </div>
      </div>
    )
  }
}

export default Home
