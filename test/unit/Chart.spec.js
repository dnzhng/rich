import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Chart from '../../src/Chart/';

describe('<Chart />', () => {
  let chart;


  beforeEach(() => {
    chart = shallow(<Chart type="LineGraph" data={"data"} />);
  })

  it('Should mount a div to the dom', () => {
    expect(chart.find('div')).to.have.length(1);
  });

  it('Should have classname rich-chart', () => {
    expect(chart.find(".rich-chart")).to.have.length(1);
  });

  it('Should change class name depending on type passed in', () => {
    expect(chart.find(".LineGraph")).to.have.length(1);
    chart = shallow(<Chart type="PieChart" data={"data"} />);
    expect(chart.find(".LineGraph")).to.have.length(0);
    expect(chart.find(".PieChart")).to.have.length(1);

  });

  it('Should have correct props', () => {
    expect(chart.props.type).to.be.truthy;
    expect(chart.props.data).to.be.truthy;
  });

});
