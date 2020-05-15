const chai = require('chai');
const checkIfWon = require('../backend/api');

describe('Testing checkIfWon function', function() {
    it('Should return false with a non wining sequence', function() {
      chai.expect(checkIfWon('X', {X: [1, 2, 3]}, [[3,2,4]])).to.be.false;
    });
    it('Should return true with a wining sequence', function() {
      chai.expect(checkIfWon('X', {X: [1, 2, 3]}, [[3,2,1]])).to.be.true;
    });
});