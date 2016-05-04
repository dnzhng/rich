import _ from 'underscore';
import d3 from 'd3';
import LineGraph from './LineGraph';

/**
 * Factory class that allows user to pass in some options and get a d3 graph of their choosing.
 * Used in Chart.react.js as the primary means of getting d3 graphs.
 * @param  {String} type    [The specific graph you want, i.e. linegraph, piechart, etc.]
 * @param  {Array} data    [The data that you want rendered in the graph]
 * @param  {Object} node    [The DOM node to attach the SVG to]
 * @param  {Object} options [Any other options that the graph can use]
 * @return {Object}         [Returns the specified d3 chart]
 */
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

/**
 * Initializes the chart with some default options, and defines the base SVG attributes
 * @param  {Object} data [Data used by the graph]
 * @param  {Object} node [The node the SVG is appended to]
 * @param  {Object} opts [Any options used by the chart]
 */
ChartFactory.prototype.initialize = function(data, node, opts) {
  //default options
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

  let formattedData = this.parse(data, options.format);
  this.update(formattedData);
}

/**
 * Parses the data properly, depending on the data format
 * @param  {Array} data   [Data to parse]
 * @param  {String} format [The specified data format, e.g. csv, json, tsv]
 * @return {Array}        [Returns the data as a JSON]
 */
ChartFactory.prototype.parse = function(data, format) {
  let parseBy = {
    csv: d3.csv.parse,
    tsv: d3.tsv.parse,
    json: (data) => {
      if (!Array.isArray(data)) {
        return [data];
      } else {
        return data;
      }
    }
  }

  if (!parseBy[format]) {
    throw new Error(format + ' is not a valid data format');
  }

  return parseBy[format](data);
}

ChartFactory.LineGraph = LineGraph;

export default ChartFactory;
