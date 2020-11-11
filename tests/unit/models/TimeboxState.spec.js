import TimeboxState from '@/models/TimeboxState.js'
import Timebox from '@/models/Timebox.js'

describe('TimeboxState.js', () => {
  it('Is created', () => {
    const state = new TimeboxState()
    expect(state.count).toBe(0)
    expect(state.countRests).toBe(0)
    expect(state.current).toBe(0)
    expect(state.cycle).toBe(4)
    expect(state.end).toBe(0)
    expect(state.initialMs).toBe(0)
    expect(state.isRunning).toBe(false)
    expect(state.isEnded).toBe(false)
    expect(state.type).toBe('wip')
    expect(state.shortRest).toBe(null)
    expect(state.longRest).toBe(null)
    expect(state.timebox).toBe(null)
  })

  it('Adds timeboxes', () => {
    const state = new TimeboxState()
    state.set('shortRest', new Timebox(5))
    state.set('longRest', new Timebox(15))
    state.set('timebox', new Timebox(25))
    expect(state.shortRest.duration).toBe(5)
    expect(state.longRest.duration).toBe(15)
    expect(state.timebox.duration).toBe(25)
  })
})
