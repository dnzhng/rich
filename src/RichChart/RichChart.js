import React from 'react';
import ChartFactory from '../d3/ChartFactory';
import ReactDOM from 'react-dom';

/**
 * Main component for d3 charts, uses the Chart Factory
 */
class RichChart extends React.Component {

  static propTypes = {
    /**
     * Type of the chart, e.g. linegraph, piechart, etc.
     */
    type: React.PropTypes.string.isRequired,
    /**
     * Data to use in the chart
     */
    data: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array,
      React.PropTypes.object
    ]).isRequired,
    /**
     * Any chart specific options
     */
    options: React.PropTypes.object
  }

  /**
   * Passes in the options to the Chart Factory to spin up the desired chart
   */
  componentDidMount() {
    this._chart = new ChartFactory(this.props.type, this.props.data, ReactDOM.findDOMNode(this), this.props.options);
  }

  /**
   * Updates the chart with new data if necessary
   */
  componentDidUpdate() {
    this._chart.update(this.props.data);
  }

  componentWillUnmount() {
    this._chart.remove();
  }

  render() {
    return (
      <div className={'rich-chart ' + this.props.type}></div>
    );
  }

}

export default RichChart;
