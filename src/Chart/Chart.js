import React from 'react';
import ChartFactory from '../d3/ChartFactory';
import ReactDOM from 'react-dom';

class Chart extends React.Component {

  static propTypes = {
    type: React.PropTypes.string.isRequired,
    data: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.array,
      React.PropTypes.object
    ]).isRequired,
    options: React.PropTypes.object
  }

  componentDidMount() {
    console.log("lolll");
    this._chart = new ChartFactory(this.props.type, this.props.data, ReactDOM.findDOMNode(this), this.props.options);
  }

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

export default Chart;
