function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let numberStart = parseInt(startBlock)
    let numberEnd = parseInt(endBlock)
    let range = Math.abs(numberStart - numberEnd)
    if (range < blockRange) {
      return `within range by ${range}`
    } else {
      return `${range} blocks out of range`
    }
  }
}
