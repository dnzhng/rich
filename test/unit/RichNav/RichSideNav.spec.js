import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import RichSideNav from '../../../src/RichNav/RichSideNav';

describe('<RichSideNav />', () => {
  let nav;


  beforeEach(() => {
    nav = shallow(<RichSideNav />);
  })

  it('Should mount an a tag to the dom', () => {
    expect(nav.find('div')).to.have.length.above(0);
  });

  it('Should have classname rich-nav-item', () => {
    expect(nav.find(".rich-side-nav")).to.have.length(1);
  });

});
