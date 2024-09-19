const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when type is SUM, a = 1.4, and b = 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 3 when type is SUM, a = 1.4, and b = 1.4', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 1.4), 2);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when type is SUBTRACT, a = 1.4, and b = 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 0 when type is SUBTRACT, a = 1.5, and b = 1.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 1.5), 0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when type is DIVIDE, a = 1.4, and b = 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when type is DIVIDE, a = 1.4, and b = 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return 1 when type is DIVIDE, a = 4, and b = 4', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 4), 1);
    });
  });
});
