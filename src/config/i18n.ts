import { dictionary, locale, _ } from 'svelte-i18n'
import { derived } from 'svelte/store'

const MESSAGE_FILE_URL_TEMPLATE = '/i18n/{locale}.json'

function setupI18n({ withLocale: _locale } = { withLocale: 'en' }) {
  const messsagesFileUrl = MESSAGE_FILE_URL_TEMPLATE.replace(
    '{locale}',
    _locale
  )

  return fetch(messsagesFileUrl)
    .then((response) => response.json())
    .then((messages) => {
      dictionary.set({ [_locale]: messages })

      // cachedLocale = _locale

      locale.set(_locale)
    })
}

const dir = derived(locale, ($locale) => ($locale === 'ar' ? 'rtl' : 'ltr'))

export { _, dir, setupI18n }
