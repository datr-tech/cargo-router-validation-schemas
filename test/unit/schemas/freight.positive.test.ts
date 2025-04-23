import { freight } from '@app-crvs/schemas';

describe('freight', () => {
  describe('positive', () => {
    test('should contain the expected number of child schemas', () => {
      // Arrange
      const numChildSchemasExpected = 24;

      // Act
      const numChildSchemasFound = Object.keys(freight).length;

      // Assert
      expect(numChildSchemasFound).toEqual(numChildSchemasExpected);
    });
  });
});
