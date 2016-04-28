import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import RichBanner from '../../../src/RichBanner/';

describe('<RichBanner />', () => {
  let banner;


  beforeEach(() => {
    banner = shallow(<RichBanner height={50} />);
  })

  it('Should mount a div within a div to the dom', () => {
    expect(banner.find('div')).to.have.length(2);
  });

  it('Should have classname rich-banner', () => {
    expect(banner.find(".rich-banner")).to.have.length(1);
  });

  it('Should have correct props', () => {
    expect(banner.props.height).to.be.truthy;
  });

});
