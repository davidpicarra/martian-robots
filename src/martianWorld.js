const cardinalPoints = ['N', 'E', 'S', 'W']

class MartianWorld {
  constructor(maximumX, maximumY) {
    this.maximumX = maximumX
    this.maximumY = maximumY
    this.robots = []
  }

  spawnRobot(x, y, orientation, commands) {
    let robot = {
      x,
      y,
      orientation: cardinalPoints.indexOf(orientation),
      state: 'IDLE',
    }
    for (const command of commands) {
      robot = this.executeCommandOnRobot(robot, command)
      if (robot.state !== 'IDLE') {
        break
      }
    }
    let robotStatus = `${robot.x} ${robot.y} ${cardinalPoints[robot.orientation]}`
    if (robot.state !== 'IDLE') {
      robotStatus += ` ${robot.state}`
    }
    this.robots.push(robotStatus)
  }

  executeCommandOnRobot(robot, command) {
    switch (command) {
      case 'L':
        robot.orientation =
          robot.orientation === 0
            ? cardinalPoints.length
            : robot.orientation - 1
        break
      case 'R':
        robot.orientation =
          robot.orientation === cardinalPoints.length
            ? 0
            : robot.orientation + 1
        break
      case 'F':
        robot = this.moveRobot(robot)
        break
    }
    this.validateRobot(robot)
    return robot
  }

  moveRobot(robot) {
    const movedRobot = Object.assign({}, robot)

    switch (cardinalPoints[robot.orientation]) {
      case 'N':
        movedRobot.y++
        break
      case 'E':
        movedRobot.x++
        break
      case 'S':
        movedRobot.y--
        break
      case 'W':
        movedRobot.x--
        break
    }

    return movedRobot
  }

  validateRobot(robot) {
    if (robot.x < 0 || robot.x > this.maximumX) {
      robot.state = 'LOST'
    }
  }

  get output() {
    return this.robots.join('\n')
  }
}

module.exports = {
  MartianWorld,
}
