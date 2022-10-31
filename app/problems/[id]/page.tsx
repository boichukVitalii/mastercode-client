import { FC } from 'react';

interface ProblemProps {
	params: { id: string; },
}

const ProblemPage: FC<any> = ({ params }) => {
	return (
		<div className='container mx-auto text-white text-center'>
			<h1 className='text-5xl'>Here you can master your. {params.id}</h1>
		</div>
	);
};

export default ProblemPage;