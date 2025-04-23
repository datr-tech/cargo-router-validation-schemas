import { entity } from '@app-crvs/schemas';

describe('entity', () => {
  describe('positive', () => {
    test('should contain the expected number of child schemas', () => {
      // Arrange
      const numChildSchemasExpected = 28;

      // Act
      const numChildSchemasFound = Object.keys(entity).length;

      // Assert
      expect(numChildSchemasFound).toEqual(numChildSchemasExpected);
    });
  });
});
