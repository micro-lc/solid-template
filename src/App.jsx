import Logo from './Logo'
import styles from './App.module.css'

function App () {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <div class={styles.logo}>
          <Logo />
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  )
}

export default App
