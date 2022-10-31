import { FC } from 'react';
import Problems from './Problems';
import { Difficulty, TProblems } from './problems.d';

const problems: TProblems = [
	{ id: 1, title: 'Two sum', difficulty: Difficulty.Easy },
	{ id: 2, title: 'Add two numbers', difficulty: Difficulty.Medium },
	{ id: 3, title: 'Median of Two Sorted Arrays', difficulty: Difficulty.Hard },
	{ id: 4, title: 'Reverse Integer', difficulty: Difficulty.Hard },
	{ id: 5, title: 'Container With Most Water', difficulty: Difficulty.Easy },
];

const ProblemsPage: FC = () => {
	return (
		<div className='container mx-auto mt-3 flex-col'>
			<div
				className=
				'flex text-slate-300 w-full h-10 border-b-2 border-slate-300 justify-between items-center text-lg font-semibold'
			>
				<div className='ml-5'>Title</div>
				<div className='mr-5'>Difficulty</div>
			</div>
			<Problems problems={problems} />
		</div>
	);
};

export default ProblemsPage;