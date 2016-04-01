import React from 'react';

class LineGraph extends React.Component {

  static defaultProps = {
    legend: true
  }

  static propTypes = {
    legend: React.PropTypes.bool,
    title: React.PropTypes.string.isRequired,
    xAxis: React.PropTypes.string.isRequired,
    yAxis: React.PropTypes.string.isRequired,
    width: React.PropTypes.string,
    height: React.PropTypes.string
  }

  render() {
    return (
      <div className="linegraph">HELLO World</div>
    )
  }
}

export default LineGraph;
