import { PAPER_SIZES_MAP, SYMBOLS_MAP } from "./constants.js"
import getRandomStrings from "./get-random-strings.js"
import fillCanvas from "./fill-canvas.js"
import { createCanvas } from "canvas"
import { writeFileSync } from "fs"

const CHART_DIMENSIONS = PAPER_SIZES_MAP.A4_PORTRAIT
const CARD_WIDTH = CHART_DIMENSIONS[0]/2
const ROWS_COUNT = 9
const COLS_COUNT = 12
const SYMBOLS = SYMBOLS_MAP.ENGLISH_LETTERS
const FILE_NAME_SUFFIX = "_1"

;(() => {
  const chartName = `far${FILE_NAME_SUFFIX}`
  generatePdf({
    WIDTH: CHART_DIMENSIONS[0],
    HEIGHT: CHART_DIMENSIONS[1],
    ROWS_COUNT,
    COLS_COUNT,
    FONT_SIZE: 24,
    STRINGS: getRandomStrings(SYMBOLS, ROWS_COUNT*COLS_COUNT),
    FOOTER: chartName,
  }, chartName)
  const cardName = `near${FILE_NAME_SUFFIX}`
  generatePdf({
    WIDTH: CARD_WIDTH,
    HEIGHT: CARD_WIDTH,
    ROWS_COUNT,
    COLS_COUNT,
    FONT_SIZE: 12,
    STRINGS: getRandomStrings(SYMBOLS, ROWS_COUNT*COLS_COUNT),
    FOOTER: cardName,
  }, cardName)
})()

function generatePdf(params, name) {
  const canvas = createCanvas(params.WIDTH, params.HEIGHT, 'pdf')
  fillCanvas(canvas, params)
  const fileName = `${name}.pdf`
  writeFileSync(fileName, canvas.toBuffer())
  console.debug(`generated ${fileName}`)
  return fileName
}
