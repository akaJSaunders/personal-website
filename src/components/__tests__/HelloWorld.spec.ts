import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import GreetingCard from '../GreetingCard.vue'

describe('GreetingCard', () => {
  it('renders properly', () => {
    const wrapper = mount(GreetingCard, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
