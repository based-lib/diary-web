<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<script context="module">
  import { waitLocale } from 'svelte-i18n'

  export async function preload() {
    return waitLocale()
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte'
  import { Router, Route, Link } from 'svelte-navigator'
  import Meta from '~/components/Meta.svelte'
  import env from '~/config/environment'
  import { _ } from '~/config/i18n'
  export let name: string
  let value: string = 'no'
</script>

<Meta metadata="{{ title: '메인 페이지에요' }}" />

<main>
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/a">a</Link>
    </nav>
    <Route path="/">
      <h1>Hello {name}! {env.hi}</h1>
      <h2>{$_('title')}</h2>
      <p>
        Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
        how to build Svelte apps.
      </p>
    </Route>
    <Route path="/a">Hi</Route>
  </Router>
</main>
