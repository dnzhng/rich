import React from 'react';

/**
 * Banner component for elements that should span the entire width of the parent div, i.e.
 * full screen views
 */
class RichBanner extends React.Component {
  static propTypes = {
    /**
     * Specify the height in terms percentage of the parent div
     */
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
