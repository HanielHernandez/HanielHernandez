import { createI18n } from 'vue-i18n'
import es from './es'
import en from './en'

export const i18n = createI18n({
  locale: navigator.language,
  messages: {
    es,
    en,
    'es-ES': { ...es },
    'en-US': { ...en }
  }
})
