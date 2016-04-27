import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {

  render() {
    return (
      <div>
        <h1>Rich React Components</h1>
        <Link to={`/docs`}>Docs</Link>
      </div>
    )
  }
}

export default Home
