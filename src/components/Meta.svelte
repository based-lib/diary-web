<script lang="ts">
  interface Meta {
    title?: string
    description?: string
    image?: string
    imageAlt?: string
    url?: string
    type?: string
  }

  export let metadata: Meta = {}
</script>

<svelte:head>
  {#if metadata.title}
    <title>{metadata.title}</title>
    <meta name="title" content="{metadata.title}" />
    <meta property="og:title" content="{metadata.title}" />
    <meta property="twitter:title" content="{metadata.title}" />
  {/if}

  {#if metadata.description}
    <meta name="description" content="Page Description" />
    <meta property="og:description" content="Page Description" />
    <meta property="twitter:description" content="Page Description" />
  {/if}

  {#if metadata.image}
    <meta property="og:image" content="example.com/path_to/thumbnail.jpg" />
    <meta
      property="twitter:image"
      content="https://example.com/path-to/thumbnail.jpg"
    />
  {/if}

  {#if metadata.imageAlt}
    <meta property="og:image:alt" content="{metadata.imageAlt}" />
    <meta property="twitter:image:alt" content="{metadata.imageAlt}" />
  {/if}

  {#if metadata.url}
    <meta property="og:url" content="{metadata.url}" />
    <meta property="twitter:url" content="{metadata.url}" />
  {/if}

  {#if metadata.type}
    <meta property="og:type" content="{metadata.type}" />
  {/if}
</svelte:head>
