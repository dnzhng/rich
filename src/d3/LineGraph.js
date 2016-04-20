import d3 from 'd3';

let LineGraph = function() {};

LineGraph.prototype.update = function(data) {
  console.log(data);
  let svg = this.svg;
  let options = this.options;

  let parseDate = d3.time.format("%d-%b-%y").parse;
  
}

export default LineGraph;
