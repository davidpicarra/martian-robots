const cardinalPoints = ['N', 'E', 'S', 'W']

class MartianWorld {
  constructor(maximumX, maximumY) {
    this.maximumX = maximumX
    this.maximumY = maximumY
    this.robots = []
    this.avoidCoordinates = []
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
    let robotStatus = `${robot.x} ${robot.y} ${
      cardinalPoints[robot.orientation]
    }`
    if (robot.state !== 'IDLE') {
      robotStatus += ` ${robot.state}`
    }
    this.robots.push(robotStatus)
  }

  executeCommandOnRobot(robot, command) {
    switch (command) {
      case 'L':
        robot.orientation--
        if (robot.orientation < 0) {
          robot.orientation = cardinalPoints.length - 1
        }
        break
      case 'R':
        robot.orientation++
        if (robot.orientation > cardinalPoints.length - 1) {
          robot.orientation = 0
        }
        break
      case 'F':
        robot = this.moveRobot(robot)
        break
    }
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

    if (this.shouldIgnoreMove(movedRobot)) {
      return robot
    } else if (this.isLostRobot(movedRobot)) {
      this.avoidCoordinates.push({ x: movedRobot.x, y: movedRobot.y })
      robot.state = 'LOST'
      return robot
    } else {
      return movedRobot
    }
  }

  shouldIgnoreMove(movedRobot) {
    return this.avoidCoordinates.find(
      ({ x, y }) => movedRobot.x === x && movedRobot.y === y
    )
  }

  isLostRobot(robot) {
    return (
      robot.x < 0 ||
      robot.x > this.maximumX ||
      robot.y > this.maximumY ||
      robot.y < 0
    )
  }

  get output() {
    return this.robots.join('\n')
  }
}

module.exports = {
  MartianWorld,
}
