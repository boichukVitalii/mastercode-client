import { FC } from 'react';
import ProblemPageContent from './ProblemPageContent';
import 'allotment/dist/style.css';

interface ProblemProps {
	params: { id: string; },
}

const ProblemPage: FC<ProblemProps> = ({ params }) => {
	return (
		<div className='h-nav text-white'>
			<ProblemPageContent></ProblemPageContent>
		</div>
	);
};

export default ProblemPage;