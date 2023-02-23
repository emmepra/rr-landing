<script>
    import corpus from '$lib/assets/data/corpus.json';
</script>

<svelte:head>
  <title>{corpus.meta.title}</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="description" content={corpus.meta.description} />
  <meta name="author" content="Matteo Prandi" />
  <meta name="news_keywords" content="" />

  <meta name="robots" content="max-image-preview:large" />

  <link rel="canonical" href="{corpus.meta.url}/" />
</svelte:head>