import getRandomStrings from "./get-random-strings.js"
import generate from "./generate.js"

// paper dimensions are in PostScript points
// https://pdfkit.org/docs/paper_sizes.html
const A4_DIMENSIONS = [595.28, 841.89] // [210mm, 297mm]
const CARD_WIDTH = A4_DIMENSIONS[0]/2

const ROWS_COUNT = 9
const COLS_COUNT = 12

const THAI_CONSTONANTS = [
  "ก", "ข", "ฃ", "ค", "ฅ", "ฆ", "ง", "จ", "ฉ", "ช", 
  "ซ", "ฌ", "ญ", "ฎ", "ฏ", "ฐ", "ฑ", "ฒ", "ณ", "ด", 
  "ต", "ถ", "ท", "ธ", "น", "บ", "ป", "ผ", "ฝ", "พ", 
  "ฟ", "ภ", "ม", "ย", "ร", "ล", "ว", "ศ", "ษ", "ส", 
  "ห", "ฬ", "อ", "ฮ"
]

;(() => {
  generate({
    FILE_NAME: 'far.pdf',
    WIDTH: A4_DIMENSIONS[0],
    HEIGHT: A4_DIMENSIONS[1],
    ROWS_COUNT,
    COLS_COUNT,
    FONT_SIZE: 24,
    STRINGS: getRandomStrings(THAI_CONSTONANTS, ROWS_COUNT*COLS_COUNT),
  })
  generate({
    FILE_NAME: 'near.pdf',
    WIDTH: CARD_WIDTH,
    HEIGHT: CARD_WIDTH,
    ROWS_COUNT,
    COLS_COUNT,
    FONT_SIZE: 12,
    STRINGS: getRandomStrings(THAI_CONSTONANTS, ROWS_COUNT*COLS_COUNT),
  })
  console.debug('generated far.pdf and near.pdf')
})()
