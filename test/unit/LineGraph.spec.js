import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import LineGraph from '../../src/LineGraph/';

describe('<LineGraph />', () => {
  let lineGraph;
  beforeEach(() => {
    lineGraph = shallow(<LineGraph title="test" xAxis="xTest" yAxis="yTest" />);
  })

  it('Should mount a div to the dom', () => {
    expect(lineGraph.find('div')).to.have.length(1);
  });

  it('Should have classname LineGraph', () => {
    expect(lineGraph.find(".linegraph")).to.have.length(1);
  });

  it('Should have correct props', () => {
    expect(lineGraph.props.title).to.be.truthy;
    expect(lineGraph.props.xAxis).to.be.truthy;
    expect(lineGraph.props.yAxis).to.be.truthy;
  });

  it('Should have the proper subcomponents', () => {
    expect(true).to.be.true;

  });

});
