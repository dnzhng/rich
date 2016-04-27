import React from 'react';

class RichBanner extends React.Component {
  static propTypes = {
    height: React.PropTypes.number.isRequired
  }

  render() {
    let style = {
      height : this.props.height + "%"
    }
    return (
      <div className={"rich-banner"} style={style}>
        <div className={this.props.className}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default RichBanner
