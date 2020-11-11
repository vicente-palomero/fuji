const type = {
    wip: 'wip'
}

class TimeboxState {
  constructor() {
    this.count = 0
    this.countRests = 0
    this.current = 0
    this.cycle = 4
    this.end = 0
    this.initialMs = 0
    this.isRunning = false
    this.isEnded = false
    this.type = type.wip
    this.shortRest = null
    this.longRest = null
    this.timebox = null
  }

  set(property, value) {
    if ({}.hasOwnProperty.call(this, property)) {
      this[property] = value
    }
  }
}

export default TimeboxState
