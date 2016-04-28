import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import NavItem from '../../../src/RichNav/NavItem';

describe('<NavItem />', () => {
  let nav;


  beforeEach(() => {
    nav = shallow(<NavItem />);
  })

  it('Should mount a div within a div to the dom', () => {
    expect(nav.find('div')).to.have.length.above(0);
  });

  it('Should have classname rich-nav-item', () => {
    expect(nav.find(".rich-nav-item")).to.have.length(1);
  });

});
