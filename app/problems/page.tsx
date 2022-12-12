import { FC, use } from 'react';
import Problems from './Problems';
import { Problem } from './problems.d';

const getProblems = async () => {
	const res = await fetch(`http://localhost:5000/api/problems`, { cache: 'no-store' });
	return res.json();
};

const ProblemsPage: FC = () => {
	const problems: Problem[] = use(getProblems());
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