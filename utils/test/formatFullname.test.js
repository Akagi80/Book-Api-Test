const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {
  // T1
  it('should return an error if "fullName" arg is empty', () => {
    expect(formatFullname('')).to.equal('Error');
  });
  // T2
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });
  // T3
  it('should return an error if "fullName" dont have format: <firstname> <lastname>', () => {
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('John Doe First')).to.equal('Error');
  });
  // T4
  it('should return the correct name in uppercase and lowercase', () => {
    expect(formatFullname('JoHN DOe')).to.equal('John Doe');
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
  });
});
