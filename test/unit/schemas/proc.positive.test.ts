import { proc } from '@app-crvs/schemas';

describe('proc', () => {
  describe('positive', () => {
    test('should contain the expected number of child schemas', () => {
      // Arrange
      const numChildSchemasExpected = 8;

      // Act
      const numChildSchemasFound = Object.keys(proc).length;

      // Assert
      expect(numChildSchemasFound).toEqual(numChildSchemasExpected);
    });
  });
});
