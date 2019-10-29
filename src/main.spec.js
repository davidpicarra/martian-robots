const { martianRobot } = require('./main')

describe('martianRobot', () => {
  describe('rotation', () => {
    it('rotate right', () => {
      // Arrange.
      const input = `5 3
      1 1 E
      R`
      // Act.
      const output = martianRobot(input)
      // Assert.
      expect(output).toBe('1 1 S')
    })

    it('rotate left', () => {
      // Arrange.
      const input = `5 3
      1 1 E
      L`
      // Act.
      const output = martianRobot(input)
      // Assert.
      expect(output).toBe('1 1 N')
    })
  })

  describe('movement', () => {
    it('move up', () => {
      // Arrange.
      const input = `5 3
      1 1 N
      F`
      // Act.
      const output = martianRobot(input)
      // Assert.
      expect(output).toBe('1 2 N')
    })

    it('move right', () => {
      // Arrange.
      const input = `5 3
      1 1 E
      F`
      // Act.
      const output = martianRobot(input)
      // Assert.
      expect(output).toBe('2 1 E')
    })

    it('move down', () => {
      // Arrange.
      const input = `5 3
      1 1 S
      F`
      // Act.
      const output = martianRobot(input)
      // Assert.
      expect(output).toBe('1 0 S')
    })

    it('move left', () => {
      // Arrange.
      const input = `5 3
      1 1 W
      F`
      // Act.
      const output = martianRobot(input)
      // Assert.
      expect(output).toBe('0 1 W')
    })
  })

})
