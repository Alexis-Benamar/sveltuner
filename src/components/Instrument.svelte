<script lang='ts'>
	import type { TInstruments, TTuning } from '$lib/config';
	import { onMount } from 'svelte';

  interface Props {
    instrument: TInstruments
    tuning?: TTuning
  }

  let { instrument, tuning }: Props = $props();

  let player: HTMLAudioElement

  onMount(() => {
    player = new Audio();
  })

  function play(note: string) {
    if (!player) return

    if (!player.paused) {
      player.pause();
    }

    if (!player.src.includes(note)) {
      player.src = `/sounds/${instrument}/${note}.ogg`;
    }

    player.currentTime = 0;
    player.play();
  }

  function stop() {
    if (!player) return

    player.pause();
  }

</script>

{#if tuning}
  <div class="strings">
    {#each tuning.notes as note}
      <button class='note' onclick={() => play(note)}>{note}</button>
    {/each}
  </div>
  <button class='mute' onclick={stop}>mute</button>
{/if}

<style>
  .strings {
    display: flex;
    justify-content: center;

    .note {
      max-width: 50px;
    }
  }
</style>
