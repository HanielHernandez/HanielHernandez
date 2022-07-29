import { createI18n } from 'vue-i18n'
import es from './es'
import en from './en'

export const i18n = createI18n({
  locale:
    localStorage.getItem('lang') ||
    (navigator.language == 'es-ES' ? 'es' : 'en'),
  messages: {
    es,
    en
  }
})
