export enum Verdict {
	Accepted = 'Accepted',
	WrongAnswer = 'Wrong answer',
	Error = 'Error',
}

export interface IResponseCompiler {
	verdict: Verdict;
	logs: string;
	runTime: string | null;
}