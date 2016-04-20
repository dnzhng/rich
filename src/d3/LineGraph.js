import d3 from 'd3';

const LineGraph = function() {};

LineGraph.prototype.update = function(data) {
  console.log(data);
  let svg = this.svg;
  let options = this.options;

  let parseDate = d3.time.format("%d-%b-%y").parse;
  let x = d3.time.scale().range([0, this.width]);
  let y = d3.scale.linear().range([this.height, 0]);

  let xAxis = this.xAxis.ticks(5);
  let yAxis = this.yAxis.ticks(5);

  let valueline = d3.svg.line()
      .x( (d) => x(d.date) )
      .y( (d) => y(d.close) );

  

}

export default LineGraph;
