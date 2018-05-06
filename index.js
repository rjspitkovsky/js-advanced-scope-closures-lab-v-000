function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let numberStart = parseInt(startBlock)
    let numberEnd = parseInt(endBlock)
    let range = Math.abs(numberEnd - numberStart)
    if (range < blockRange) {
      return `within range by ${range - blockRange}`
    } else {
      return `${range} blocks out of range`
    }
  }
}
