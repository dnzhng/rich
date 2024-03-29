import ChartFactory from '../../../src/d3/ChartFactory';
import { expect } from 'chai';

describe ('Chart factory', () => {

  let chartFactory;

  const data = `date,close
  1-May-12,58.13
  30-Apr-12,53.98
  27-Apr-12,67.00
  26-Apr-12,89.70
  25-Apr-12,99.00
  24-Apr-12,130.28
  23-Apr-12,166.70
  20-Apr-12,234.98
  19-Apr-12,345.44
  18-Apr-12,443.34
  17-Apr-12,543.70
  16-Apr-12,580.13
  13-Apr-12,605.23
  12-Apr-12,622.77
  11-Apr-12,626.20
  10-Apr-12,628.44
  9-Apr-12,636.23
  5-Apr-12,633.68
  4-Apr-12,624.31
  3-Apr-12,629.32
  2-Apr-12,618.63
  30-Mar-12,599.55
  29-Mar-12,609.86
  28-Mar-12,617.62
  27-Mar-12,614.48
  26-Mar-12,606.98`;

  const options = {
    height: 270,
    width: 600,
    format: 'csv',
    margin: {
      top: 30,
      right: 20,
      bottom: 30,
      left: 50
    }
  }

  it('should throw an error if chart does not exist', () => {
    let newChart = () => {
      chartFactory = new ChartFactory('FakeGraph');
    }

    expect(newChart).to.throw(Error);
  })

  it('should return the chart if it exists', () => {
    let newChart = () => {
      chartFactory = new ChartFactory('LineGraph', data, null, options);
    }
    expect(newChart).to.not.throw(Error);
  })
})
