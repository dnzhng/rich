import React from 'react';
import { Link } from 'react-router';
import { RichBanner } from '../../../src'
class Home extends React.Component {

  render() {
    return (
      <div className="rich-home">
        <RichBanner className="brand" height={50} >
          <h1 className="brand-logo">Rich</h1>
          <h3 className="brand-description">A React component library to help you build your applications</h3>
        </RichBanner>
        <Link to={`/docs`}>Docs</Link>
      </div>
    )
  }
}

export default Home
