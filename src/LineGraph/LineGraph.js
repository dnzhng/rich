import React from 'react';
import d3 from 'd3';

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
      <div className="linegraph"></div>
    )
  }
}

export default LineGraph;
