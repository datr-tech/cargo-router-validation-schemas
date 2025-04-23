import { granul8 } from '@app-crvs/schemas';

describe('granul8', () => {
  describe('positive', () => {
    test('should contain the expected number of child schemas', () => {
      // Arrange
      const numChildSchemasExpected = 16;

      // Act
      const numChildSchemasFound = Object.keys(granul8).length;

      // Assert
      expect(numChildSchemasFound).toEqual(numChildSchemasExpected);
    });
  });
});
