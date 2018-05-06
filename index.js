function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let numberStart = parseInt(startBlock)
    let numberEnd = parseInt(endBlock)
    let range = Math.abs(numberEnd - numberStart)
    if (range < blockRange) {
      return `within range by ${ blockRange - range}`
    } else {
      return `${range} blocks out of range`
    }
  }
}
