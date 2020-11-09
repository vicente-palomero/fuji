import { shallowMount } from '@vue/test-utils'
import Start from '@/components/buttons/Start.vue'

describe('Start.vue', () => {
  it('Renders a button', () => {
    const label = "Start"
    const wrapper = shallowMount(Start, { propsData:
      { label }
    })
    expect(wrapper.text()).toMatch(label)
  })
})
