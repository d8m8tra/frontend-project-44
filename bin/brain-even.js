#!/usr/bin/env node

import brainGames from '../bin/brain-games.js'
import evenGame from '../src/games/isEven.js'
import getName from '../src/cli.js'

brainGames()
const userName = getName()
evenGame(userName)
