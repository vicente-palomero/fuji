const msMultiplier = 60 * 1000

class Timebox {
  constructor(duration) {
    this.duration = duration
    this.ms = duration * msMultiplier
  }

  toMs() {
    return this.ms
  }
}

export default Timebox
