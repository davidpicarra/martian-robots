# David Piçarra - Martian Robot
[![CircleCI](https://img.shields.io/circleci/project/github/davidpicarra/martian-robot.svg)](https://circleci.com/gh/davidpicarra/martian-robot)

> A Node.js project to solve the Martian Robot challenge

## How to run the app

In order to run the app locally, the following commands must be executed:
```bash
# be sure to run supported node version
$ nvm use

# yarn
$ yarn
$ yarn start

# run tests
$ yarn test
```

## What was done

A function named `martianRobot` which will receive as input a string containing the following:
- First line will be the size of the grid (x, y)
- Every two lines after will be the following:
  - Initial position (x, y)
  - Movements to be executed:
    - L for Left
    - R for right
    - F for forward

Sample Input
```
5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL
```

Sample Output
```
1 1 E
3 3 N LOST
2 3 S
```

## Future work
- [ ] Read from file
- [ ] Read from user input
