import { FC, use } from 'react';
import ProblemPageContent from './ProblemPageContent';
import 'allotment/dist/style.css';
import { Problem } from '../problems';

interface ProblemProps {
	params: { id: string; },
}

const getProblem = async (id) => {
	const res = await fetch(`http://localhost:5000/api/problems/${id}`, { cache: 'no-store' });
	return res.json();
};

const ProblemPage: FC<ProblemProps> = ({ params }) => {
	const problem: Problem = use(getProblem(params.id));
	return (
		<div className='h-nav text-white'>
			<ProblemPageContent problem={problem}></ProblemPageContent>
		</div >
	);
};

export default ProblemPage;