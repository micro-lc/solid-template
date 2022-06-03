/* @refresh reload */
import {render} from 'solid-js/web'

import './index.css'
import App from './App'

let appContainer

function retrieveContainer (props = {}) {
  const {container} = props
  return container ? container.querySelector('#root') : document.querySelector('#root')
}

function renderApp (props) {
  appContainer = appContainer || retrieveContainer(props)
  render(() => <App />, appContainer)
}

export async function mount (props) {
  renderApp(props)
}

export async function unmount () {
  appContainer.textContent = ''
}

export async function bootstrap () {

}

if (!window.__POWERED_BY_QIANKUN__) {
  renderApp({})
}
