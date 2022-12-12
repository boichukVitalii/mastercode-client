import Link from 'next/link';
import { FC } from 'react';
import { Difficulty, Problem } from './problems.d';

interface ProblemProps {
	problems: Problem[];
}

const Problems: FC<ProblemProps> = ({ problems }) => {
	return (
		<div className='flex flex-col mt-5 text-slate-300'>
			{
				problems.map((problem, i) => {
					const bg = (i % 2 === 0) ? 'bg-nav-blue' : '';
					const difficulty =
						problem.difficulty === Difficulty.Easy ? 'text-green-500'
							: problem.difficulty === Difficulty.Medium ? 'text-yellow-300'
								: 'text-red-700';
					return (
						<div key={problem.title}
							className={'flex justify-between items-center h-12 divide-none ' + bg}>
							<div className='ml-5 hover:text-white'>
								<Link href={`/problems/${problem.id}`}>{`${i + 1}. ${problem.title}`}</Link>
							</div>
							<div className={'mr-5 ' + difficulty}>
								{problem.difficulty}
							</div>
						</div>
					);
				})
			}
		</div>
	);
};

export default Problems;