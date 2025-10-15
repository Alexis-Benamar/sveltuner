<script lang='ts'>
	import { instruments, tunings, type TInstruments, type TTuning } from '$lib/types';
	import Instrument from '../components/Instrument.svelte';

  let instrument = $state<TInstruments>(instruments[0]);
  let selectedTuning = $derived<TTuning>(tunings[instrument][0]);
</script>

<div style="display: flex; gap: 32px;">
  <label>
    Instrument
    <select bind:value={instrument}>
      {#each instruments as option}
        <option value={option}>
          {option}
        </option>
      {/each}
    </select>
  </label>


  <label>
    Tuning
    <select bind:value={selectedTuning}>
      {#each tunings[instrument] as tuning}
        <option value={tuning}>
          {tuning.name}
        </option>
      {/each}
    </select>
  </label>
</div>

<Instrument instrument={instrument} tuning={selectedTuning} />
