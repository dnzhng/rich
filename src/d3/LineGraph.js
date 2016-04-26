import d3 from 'd3';

const LineGraph = function() {};

LineGraph.prototype.update = function(data) {
  let svg = this.svg;

  let parseDate = d3.time.format("%d-%b-%y").parse;
  let x = d3.time.scale().range([0, this.width]);
  let y = d3.scale.linear().range([this.height, 0]);

  let xAxis = this.xAxis.scale(x).ticks(5);
  let yAxis = this.yAxis.scale(y).ticks(5);

  let valueline = d3.svg.line()
      .x( (d) => x(d.date) )
      .y( (d) => y(d.close) );

  data.forEach((d) => {
    d.date = parseDate(d.date);
    d.close = +d.close;
  })

  x.domain(d3.extent(data, (d) => d.date));
  y.domain([0, d3.max(data, (d) => d.close)]);

  svg.append("path")
    .attr("class", "line")
    .attr("d", valueline(data));

  svg.append('g').attr('class', 'x axis')
      .attr('transform', 'translate(0, ' + this.height + ')').call(xAxis);

  svg.append('g').attr('class', 'y axis')
      .call(yAxis);
}

export default LineGraph;
