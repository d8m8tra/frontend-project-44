#!/usr/bin/env node

import brainGames from './brain-games.js'
import evenGame from '../src/games/calc.js'
import getName from '../src/cli.js'

brainGames()
const userName = getName()
evenGame(userName)
