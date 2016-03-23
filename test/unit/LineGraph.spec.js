import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import LineGraph from '../../src/LineGraph/';

describe('<LineGraph />', () => {

  it('Should mount a div to the dom', () => {
    const wrapper = mount(<LineGraph />);
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('Should have classname LineGraph', () => {
    const wrapper = mount(<LineGraph />);
    expect(wrapper.contains(<div className="linegraph" />)).to.be.true;
  })

});
