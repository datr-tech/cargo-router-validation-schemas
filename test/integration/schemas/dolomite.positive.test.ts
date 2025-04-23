import { dolomite } from './../../../dist';

describe('dolomite', () => {
  describe('positive', () => {
    test('should contain the expected number of child schemas', () => {
      // Arrange
      const numChildSchemasExpected = 12;

      // Act
      const numChildSchemasFound = Object.keys(dolomite).length;

      // Assert
      expect(numChildSchemasFound).toEqual(numChildSchemasExpected);
    });
  });
});
