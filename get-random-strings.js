export default function (originalSourceArray, count) {
  const souceArray = originalSourceArray.slice(0) // copy
  // shuffle first time so extra added elements below are random
  shuffleArrayInPlace(souceArray)

  let a = []
  while ((a.length < count))
    a = a.concat(souceArray)
  a.splice(0, a.length - count) // remove some
  shuffleArrayInPlace(a)
  return a
}

// https://stackoverflow.com/a/12646864
function shuffleArrayInPlace(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
