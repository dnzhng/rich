import React from 'react';
import classNames from 'classnames';
/**
 * Navbar component
 */
class RichNav extends React.Component {

  static propTypes = {
    /**
     * Pass in the specific height in pixels
     */
    height: React.PropTypes.number.isRequired
  }

  render() {
    let style = {
      height : this.props.height + "px"
    }

    let clazz = classNames('rich-nav', this.props.className);
    return (
      <div className={clazz} style={style}>
        {this.props.children}
      </div>
    )
  }
}

export default RichNav;
