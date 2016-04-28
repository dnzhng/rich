import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import NavLeft from '../../../src/RichNav/NavLeft';

describe('<NavLeft />', () => {
  let nav;


  beforeEach(() => {
    nav = shallow(<NavLeft />);
  })

  it('Should mount a div within a div to the dom', () => {
    expect(nav.find('div')).to.have.length.above(0);
  });

  it('Should have classname rich-nav-left', () => {
    expect(nav.find(".rich-nav-left")).to.have.length(1);
  });

});
