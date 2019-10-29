const { MartianWorld } = require('./martianWorld')

const martianRobot = input => {
  try {
    const inputLines = input.split('\n').map(line => line.trim())

    const [maximumX, maximumY] = inputLines.shift().split(' ')

    const martianWorld = new MartianWorld(maximumX, maximumY)

    for (let i = 0; i < inputLines.length; i = i + 2) {
      const [
        startingPositionX,
        startingPositionY,
        startingOrientation,
      ] = inputLines[i].split(' ')
      const commands = inputLines[i + 1]

      martianWorld.spawnRobot(
        startingPositionX,
        startingPositionY,
        startingOrientation,
        commands
      )
    }

    return martianWorld.output
  } catch (e) {
    return `Martian robot malfunction [${e.message}]`
  }
}

module.exports = {
  martianRobot,
}
