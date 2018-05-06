function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let range = Math.abs(startBlock - endBlock)
    if (range < blockRange) {
      return `within range by ${range}`
    } else {
      return `${range} blocks out of range`
    }
  }
}
