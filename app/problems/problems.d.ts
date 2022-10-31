export type TProblems = {
	id: number,
	title: string,
	difficulty: Difficulty,
}[];

export enum Difficulty {
	Easy = 'Easy',
	Medium = 'Medium',
	Hard = 'Hard'
}