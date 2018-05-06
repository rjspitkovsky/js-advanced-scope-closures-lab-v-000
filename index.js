function produceDrivingRange(drivingRange) {
  return function(startBlock, endBlock) {
    let range = Math.abs(startBlock - endBlock)
    if (range < drivingRange) {
      return `within range by ${range}`
    } else {
      return `${range} blocks out of range`
    }
  }
}