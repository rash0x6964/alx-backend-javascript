const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when type is SUM, a = 1.4, and b = 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 3 when type is SUM, a = 1.4, and b = 1.4', () => {
      expect(calculateNumber('SUM', 1.4, 1.4)).to.equal(2);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when type is SUBTRACT, a = 1.4, and b = 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 0 when type is SUBTRACT, a = 1.5, and b = 1.5', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 1.5)).to.equal(0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when type is DIVIDE, a = 1.4, and b = 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when type is DIVIDE, a = 1.4, and b = 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return 1 when type is DIVIDE, a = 4, and b = 4', () => {
      expect(calculateNumber('DIVIDE', 4, 4)).to.equal(1);
    });
  });
});
