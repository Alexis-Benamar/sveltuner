export const instruments = ['bass', 'guitar'] as const;
export type TInstruments = (typeof instruments)[number];

export type TTuning = {
	name: string;
	keys: string[];
	// TODO: freqs
};

export const tunings = {
	bass: [
		{
			name: '4 strings',
			keys: ['E1', 'A1', 'D2', 'G2'],
		},
		{
			name: '5 strings',
			keys: ['B0', 'E1', 'A1', 'D2', 'G2'],
		},
	] as const,
	guitar: [
		{
			name: '6 strings',
			keys: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
		},
	] as const,
} satisfies Record<TInstruments, TTuning[]>;
