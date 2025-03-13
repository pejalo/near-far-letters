const MARGIN = 20 // PS points

export default function (canvas, params) {
  const {
    WIDTH,
    HEIGHT,
    ROWS_COUNT,
    COLS_COUNT,
    FONT_SIZE,
    STRINGS,
    FOOTER,
  } = params
  const ITEM_WIDTH = (WIDTH - 2*MARGIN) / COLS_COUNT
  const ITEM_HEIGHT = (HEIGHT - 2*MARGIN) / ROWS_COUNT

  const ctx = canvas.getContext('2d')
  ctx.imageSmoothingEnabled = false
  ctx.fillStyle = 'black'
  ctx.font = `bold ${FONT_SIZE}pt sans-serif`
  // so we can set text positions based on the middle of the text
  ctx.textBaseline = 'middle'
  ctx.textAlign = 'center'

  for (let rowIndex = 0; rowIndex < ROWS_COUNT; rowIndex++) {
    for (let colIndex = 0; colIndex < COLS_COUNT; colIndex++) {
      const string = STRINGS[rowIndex*COLS_COUNT + colIndex]
      const centerX = MARGIN + (ITEM_WIDTH*colIndex) + ITEM_WIDTH/2
      const centerY = MARGIN + (ITEM_HEIGHT*rowIndex) + ITEM_HEIGHT/2
      ctx.fillText(string, centerX, centerY)
    }
  }

  if (FOOTER) {
    const footerFontSize = Math.round(FONT_SIZE/2)
    const footerCenterX = WIDTH/2
    const footerCenterY = HEIGHT - Math.round(footerFontSize*1.5)
    ctx.font = `${footerFontSize}pt sans-serif`
    ctx.fillText(FOOTER, footerCenterX, footerCenterY)
  }
}
