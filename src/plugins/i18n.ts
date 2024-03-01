import { createI18n } from 'vue-i18n'
import vi from '@/locales/vi.json'
import en from '@/locales/en.json'
import { LANGUAGE_KEY } from '@/constants/storage'

const messages = {
  vi: {
    ...vi
  },
  en: {
    ...en
  }
}

const browserLanguage = localStorage.getItem(LANGUAGE_KEY) ?? 'vi'

const instance = createI18n({
  locale: browserLanguage,
  legacy: true,
  messages,
  globalInjection: true
})

export default instance

export const i18n = instance.global
