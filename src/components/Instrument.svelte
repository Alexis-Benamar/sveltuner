<script lang='ts'>
	import type { TInstruments, TTuning } from '$lib/config';

  interface Props {
    instrument: TInstruments
    tuning?: TTuning
  }

  let { instrument, tuning }: Props = $props();
</script>

{#if tuning}
  <div class="strings">
    {#each tuning.keys as string}
      <button class='string'>{string}</button>
    {/each}
  </div>
  <button class='mute'>mute</button>
{/if}

<style>
  .strings {
    display: flex;
    justify-content: center;

    .string {
      max-width: 50px;
    }
  }
</style>
