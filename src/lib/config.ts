export const instruments = ['bass', 'guitar'] as const;
export type TInstruments = (typeof instruments)[number];

export type TTuning = {
	name: string;
	notes: string[];
};

export const tunings = {
	bass: [
		{
			name: '4 strings',
			notes: ['E1', 'A1', 'D2', 'G2'],
		},
		{
			name: '4 strings (drop D)',
			notes: ['D1', 'A1', 'D2', 'G2'],
		},
		{
			name: '5 strings',
			notes: ['B0', 'E1', 'A1', 'D2', 'G2'],
		},
	] as const,
	guitar: [
		{
			name: '6 strings',
			notes: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
		},
		{
			name: '6 strings (drop D)',
			notes: ['D2', 'A2', 'D3', 'G3', 'B3', 'E4'],
		},
		{
			name: '6 strings (DADGAD)',
			notes: ['D2', 'A2', 'D3', 'G3', 'A3', 'D4'],
		},
	] as const,
} satisfies Record<TInstruments, TTuning[]>;
