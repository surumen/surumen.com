import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { state } from './content/data'
import { snakeCase } from './util'
import { Section, Language, languages } from './content/data_types'

import './assets/main.css'

let theme = 0
const themeCount = 3

if (state.language === undefined) {
  state.language = languages[Math.floor(Math.random() * languages.length)]
}

document.addEventListener('keydown', function (e) {
  switch (e.which) {
    case 32: {
      e.preventDefault()
      theme += 1
      for (let i = 0; i < themeCount; i++) {
        document.body.classList.remove(`theme-${i}`)
      }
      document.body.classList.add(`theme-${theme % themeCount}`)
      break
    }
    case 82: {
      state.language = Language.ruby
      break
    }
    case 74: {
      state.language = Language.javascript
      break
    }
    case 84: {
      state.language = Language.typescript
      break
    }
  }
})

const app = createApp(App)

app.mixin({
  data() {
    return {
      Section,
      state
    }
  },
  methods: {
    snakeCase(str: string) {
      return (<any>this).isRuby ? snakeCase(str) : str
    }
  },
  computed: {
    isJs() {
      return (
        this.state.currentLanguage === Language.javascript ||
        this.state.currentLanguage === Language.typescript
      )
    },
    isTs() {
      return this.state.currentLanguage === Language.typescript
    },
    isRuby() {
      return this.state.currentLanguage === Language.ruby
    }
  }
})

app.provide('state', state)

app.use(router)

app.mount('#app')
