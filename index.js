function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let numberStart = parseInt(startBlock)
    let numberEnd = parseInt(endBlock)
    let range = Math.abs(numberStart - numberEnd)
    if (range < blockRange) {
      return `within range by ${blockRange - range}`
    } else {
      return `${range - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(bill) {
    return bill * percentage
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor() {
      this.id = ++driverId
    }
  }
}
