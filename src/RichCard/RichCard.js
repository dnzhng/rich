import React from 'react';
import classNames from 'classnames';
class RichCard extends React.Component {
  static propTypes = {
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
