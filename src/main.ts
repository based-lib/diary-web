import { from, map, firstValueFrom } from 'rxjs'

import { setupI18n } from '~/config/i18n'

import App from './App.svelte'

export default firstValueFrom(
  from(setupI18n({ withLocale: 'ko' })).pipe(
    map(
      () =>
        new App({
          target: document.body,
          props: {
            name: 'world',
          },
        })
    )
  )
)
