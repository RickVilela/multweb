import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import Vueform from '@vueform/vueform'
import vueformConfig from './../vueform.config'
import router from './router'
import { useMainStore } from '@/stores/main.js'

import './css/main.css'

// FormKit imports
import { plugin as formKitPlugin, defaultConfig } from '@formkit/vue'
import { createMultiStepPlugin } from '@formkit/addons'
import { pt } from '@formkit/i18n'
import '@formkit/themes/genesis'
import '@formkit/addons/css/multistep'

// Init Pinia
const pinia = createPinia()

// Create Vue app
createApp(App)
  .use(Vueform, vueformConfig)
  .use(router)
  .use(pinia)
  .use(formKitPlugin, defaultConfig({
    plugins: [createMultiStepPlugin()],
    locales: { pt },
    locale: 'pt',
  }))
  .mount('#app')

// Init main store
const mainStore = useMainStore(pinia)

// Fetch sample data
mainStore.fetchSampleClients()
mainStore.fetchSampleHistory()

// Dark mode
// Uncomment, if you'd like to restore persisted darkMode setting, or use `prefers-color-scheme: dark`. Make sure to uncomment localStorage block in src/stores/darkMode.js
import { useDarkModeStore } from './stores/darkMode'

const darkModeStore = useDarkModeStore(pinia)

if (
  (!localStorage['darkMode'] && window.matchMedia('(prefers-color-scheme: dark)').matches) ||
  localStorage['darkMode'] === '1'
) {
  darkModeStore.set(true)
}

// Default title tag
const defaultDocumentTitle = 'MultWeb'

// Set document title from route meta
router.afterEach((to) => {
  document.title = to.meta?.title
    ? `${to.meta.title} — ${defaultDocumentTitle}`
    : defaultDocumentTitle
})
