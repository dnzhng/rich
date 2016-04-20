import _ from 'underscore';
import d3 from 'd3';
import LineGraph from './LineGraph';

const ChartFactory = function(type, data, node, options) {
  let newChart;

  if (typeof ChartFactory[type] !== 'function' ||
      typeof ChartFactory[type].prototype.update !== 'function') {
    throw new Error(type + ' is not a valid Chart');
  }

  if (!ChartFactory[type].prototype.initialize) {
    _.extend(ChartFactory[type].prototype, ChartFactory.prototype);
  }
  newChart = new ChartFactory[type]();
  newChart.initialize(data, node, options);

  return newChart;
}

ChartFactory.prototype.initialize = function(data, node, opts) {
  let defaults = {
    height: 400,
    width: 600,
    format: 'json',
    margin: {
      top: 5,
      bottom: 5,
      left: 5,
      right: 5
    },
    xaxis: {
      orientation: 'bottom'
    },
    yaxis: {
      orientation: 'left'
    }
  }
  let options = this.options = _.defaults(opts || {}, defaults);

  this.height = options.height - (options.margin.top + options.margin.bottom);
  this.width = options.width - (options.margin.right + options.margin.left);
  this.xAxis = d3.svg.axis().orient(options.xaxis.orientation);
  this.yAxis = d3.svg.axis().orient(options.yaxis.orientation);

  this.svg = d3.select(node).append('svg')
      .attr('width', this.width + options.margin.left + options.margin.right)
      .attr('height', this.height + options.margin.top + options.margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + options.margin.left + ',' + options.margin.top + ')')

  this.svg.append('g').attr('class', 'x axis')
      .attr('transform', 'translate(0, ' + this.height + ')');

  this.svg.append('g').attr('class', 'y axis')
      .append('text').attr('transform', 'rotate(-90)');

  this.update(data);
}

ChartFactory.LineGraph = LineGraph;

export default ChartFactory;