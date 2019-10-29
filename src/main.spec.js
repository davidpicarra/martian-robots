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

    it('rotate 360 degrees to the right', () => {
      // Arrange.
      const input = `5 3
      1 1 E
      RRRR`
      // Act.
      const output = martianRobot(input)
      // Assert.
      expect(output).toBe('1 1 E')
    })

    it('rotate 360 degrees to the left', () => {
      // Arrange.
      const input = `5 3
      1 1 E
      LLLL`
      // Act.
      const output = martianRobot(input)
      // Assert.
      expect(output).toBe('1 1 E')
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

  describe('several robots', () => {
    it('recognizes two robots', () => {
      // Arrange.
      const input = `5 3
      1 1 W
      F
      1 1 E
      F`
      // Act.
      const output = martianRobot(input)
      // Assert.
      expect(output).toBe(`0 1 W
2 1 E`)
    })

    it('shows error on incorrect input', () => {
      // Arrange.
      const input = `5 3
      1 1 W
      1 1 E
      F`
      // Act.
      const output = martianRobot(input)
      // Assert.
      expect(output).toMatch('Martian robot malfunction')
    })
  })

  describe('state', () => {
    it('can be lost', () => {
      // Arrange.
      const input = `1 1
      1 1 E
      F`
      // Act.
      const output = martianRobot(input)
      // Assert.
      expect(output).toBe('1 1 E LOST')
    })
  })

  it('should pass provided test', () => {
    // Arrange.
    const input = `5 3
    1 1 E
    RFRFRFRF
    3 2 N
    FRRFLLFFRRFLL
    0 3 W
    LLFFFLFLFL`
    // Act.
    const output = martianRobot(input)
    // Assert.
    expect(output).toBe(`1 1 E
3 3 N LOST
2 3 S`)
  })
})
