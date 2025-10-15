<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<h1 class="title">Sveltuner<span class="note">🎶</span></h1>
</header>

<main class='container'>{@render children?.()}</main>

<style>
	.title {
		display: flex;

		.note {
			margin-left: auto;
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
