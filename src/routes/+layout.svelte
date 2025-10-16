<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/assets/matcha-custom.css';

	let { children } = $props();
	let description = 'A simple bass / guitar tuner made with SvelteKit. It doesnt actually listen for sounds but plays back the correct note when the corresponding string is pressed.'
	let title = 'sveltuner'
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{title}</title>
	<meta name="description" content={description}>
  <meta property="og_site_name" content={title}>
  <meta property="og:url" content="https://sveltuner.cacti.ovh">
  <meta property="og:type" content="website">
  <meta property="og:title" content={title}>
  <meta property="og:description" content={description}>
  <!-- <meta property="og:image" content={image}> -->
</svelte:head>

<header>
	<h1 class="title">sveltuner<span class="note">🎶</span></h1>
</header>

<main class='container'>{@render children?.()}</main>

<style>
	header {
		padding-block: 16px;

		.title {
			display: flex;

			.note {
				margin-left: auto;
			}
		}
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 400px;
		margin: 0 auto;
	}
</style>