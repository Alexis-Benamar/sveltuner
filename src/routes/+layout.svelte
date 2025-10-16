<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/assets/matcha-custom.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
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