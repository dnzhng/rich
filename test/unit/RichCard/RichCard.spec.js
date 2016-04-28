import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import RichCard from '../../../src/RichCard/';

describe('<RichCard />', () => {
  let card;


  beforeEach(() => {
    card = shallow(<RichCard />);
  })

  it('Should mount a div to the dom', () => {
    expect(card.find('div')).to.have.length.above(0);
  });

  it('Should have classname rich-card', () => {
    expect(card.find(".rich-card")).to.have.length(1);
  });


});
