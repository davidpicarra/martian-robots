# David Piçarra - Martian Robot
[![CircleCI](https://img.shields.io/circleci/project/github/davidpicarra/martian-robots.svg)](https://circleci.com/gh/davidpicarra/martian-robots)

> A Node.js project to solve the Martian Robot challenge

## How to run the app

In order to run the app locally, the following commands must be executed:
```bash
# be sure to run supported node version
$ nvm use

# yarn
$ yarn
$ yarn start
# follow instructions and press CTRL+C to exit the node script

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

Created unit test with 100% coverage for the martian robot (excluding user input as per the future work section) and added specific test to try the scenario provided:
> [should execute the sample test correctly](https://github.com/davidpicarra/martian-robots/blob/master/src/main.spec.js#L206)

## Future work
- [ ] Read from file
- [x] Read from user input
- [ ] Improve user input to re-use world instead of creating new one for each new robot created
- [ ] Improve test coverage for user input
