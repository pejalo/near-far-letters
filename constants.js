// paper dimensions are in PostScript points
// https://pdfkit.org/docs/paper_sizes.html
export const PAPER_SIZES_MAP = {
  A4_PORTRAIT: [595.28, 841.89], // mm: [210, 297]
  LETTER_PORTRAIT: [612, 792], // mm: [215.9, 279.4]
}

export const SYMBOLS_MAP = {
  ENGLISH_LETTERS: [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ],
  THAI_CONSONANTS: [
    "ก", "ข", "ฃ", "ค", "ฅ", "ฆ", "ง", "จ", "ฉ", "ช", 
    "ซ", "ฌ", "ญ", "ฎ", "ฏ", "ฐ", "ฑ", "ฒ", "ณ", "ด", 
    "ต", "ถ", "ท", "ธ", "น", "บ", "ป", "ผ", "ฝ", "พ", 
    "ฟ", "ภ", "ม", "ย", "ร", "ล", "ว", "ศ", "ษ", "ส", 
    "ห", "ฬ", "อ", "ฮ"
  ],
}
