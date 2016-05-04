import React from 'react';
import classNames from 'classnames';

/**
 * Card component - includes an image and a description for that image, contained in a 'card'
 */
class RichCard extends React.Component {
  static propTypes = {
    /**
     * Specify the image url as a string
     */
    imageUrl: React.PropTypes.string
  }

  render() {
    let richCard = classNames('rich-card', this.props.className);
    return (
      <div className={richCard}>
        <div className="rich-card-image">
          <img src={this.props.imageUrl} />
        </div>
        <div className="rich-card-description">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default RichCard;
