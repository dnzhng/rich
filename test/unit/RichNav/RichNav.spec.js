import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import RichNav from '../../../src/RichNav/';

describe('<RichNav />', () => {
  let nav;


  beforeEach(() => {
    nav = shallow(<RichNav height={50} />);
  })

  it('Should mount a div within a div to the dom', () => {
    expect(nav.find('div')).to.have.length.above(0);
  });

  it('Should have classname rich-nav', () => {
    expect(nav.find(".rich-nav")).to.have.length(1);
  });

  it('Should have correct props', () => {
    expect(nav.props.height).to.be.truthy;
  });

});
