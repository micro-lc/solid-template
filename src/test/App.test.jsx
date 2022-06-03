import {describe, expect, test} from 'vitest'
import {render} from 'solid-testing-library'

import App from '../App'

describe('<App />', () => {
  test('renders', () => {
    const {container, unmount} = render(() => <App />)
    expect(container.innerHTML).toMatchSnapshot()
    unmount()
  })

  test('contains text', () => {
    const {container, unmount} = render(() => <App />)
    const stringsToContain = ['Edit', 'src/App.jsx', 'and save to reload', 'Learn Solid']
    stringsToContain.forEach(stringToContain => expect(container.innerHTML).toContain(stringToContain))
    unmount()
  })
})
