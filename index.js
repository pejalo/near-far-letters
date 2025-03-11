import { CHART_DIMENSIONS_MAP, SYMBOLS_MAP } from "./constants.js"
import getRandomStrings from "./get-random-strings.js"
import generate from "./generate.js"

const CHART_DIMENSIONS = CHART_DIMENSIONS_MAP.A4_PORTRAIT
const CARD_WIDTH = CHART_DIMENSIONS[0]/2
const ROWS_COUNT = 9
const COLS_COUNT = 12
const SYMBOLS = SYMBOLS_MAP.ENGLISH_LETTERS
const FILE_NAME_SUFFIX = "_1"

;(() => {
  const chartFileName = `far${FILE_NAME_SUFFIX}`
  generate({
    FILE_NAME: chartFileName,
    WIDTH: CHART_DIMENSIONS[0],
    HEIGHT: CHART_DIMENSIONS[1],
    ROWS_COUNT,
    COLS_COUNT,
    FONT_SIZE: 24,
    STRINGS: getRandomStrings(SYMBOLS, ROWS_COUNT*COLS_COUNT),
  })
  const cardFileName = `near${FILE_NAME_SUFFIX}`
  generate({
    FILE_NAME: cardFileName,
    WIDTH: CARD_WIDTH,
    HEIGHT: CARD_WIDTH,
    ROWS_COUNT,
    COLS_COUNT,
    FONT_SIZE: 12,
    STRINGS: getRandomStrings(SYMBOLS, ROWS_COUNT*COLS_COUNT),
  })
  console.debug(`generated ${cardFileName} and ${cardFileName}`)
})()
