import React from 'react';

class RichNav extends React.Component {

  static propTypes = {
    height: React.PropTypes.number.isRequired
  }

  render() {
    let style = {
      height : this.props.height + "px"
    }

    return (
      <div className={"rich-nav " + this.props.className} style={style}>
        {this.props.children}
      </div>
    )
  }
}

export default RichNav;
