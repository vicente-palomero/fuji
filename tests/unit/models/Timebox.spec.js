import Timebox from '@/models/Timebox.js'

describe('Timebox.js', () => {
  it('Is created with duration', () => {
    const duration = 5
    const timebox = new Timebox(duration)
    expect(timebox.duration).toBe(duration)
  })
  it('Returns length into milliseconds', () => {
    const duration = 5
    const timebox = new Timebox(duration)
    expect(timebox.toMs()).toBe(duration * 60 * 1000)
  })
})
