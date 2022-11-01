'use client';

import { FC } from 'react';
import { Allotment } from 'allotment';
import 'allotment/dist/style.css';
import CodeEditor from './CodeEditor';
interface ProblemProps {
	params: { id: string; },
}

const ProblemPage: FC<any> = ({ params }) => {
	return (
		<div className='h-nav text-white'>
			<Allotment className='flex'>
				<Allotment.Pane snap minSize={400} preferredSize={650}>
					<div className='flex h-11 bg-command-blue border-b border-t border-slate-700'></div>
					<div className='px-2 mt-3'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus beatae qui praesentium reiciendis sint nemo non, aut animi eius repellat unde libero vitae sit cupiditate vero fugiat quia alias labore.
					</div>
				</Allotment.Pane>
				<Allotment.Pane minSize={500}>
					<Allotment vertical>
						<Allotment.Pane minSize={300}>
							<div className='flex h-11 bg-command-blue border-b border-t border-slate-700'></div>
							<CodeEditor />
						</Allotment.Pane>
						<Allotment.Pane snap minSize={200} preferredSize={300}>
							<div className='flex h-11 bg-command-blue border-b border-t border-slate-700 items-center'>
								<span className='ml-4'>Console</span>
							</div>
						</Allotment.Pane>
					</Allotment>
				</Allotment.Pane>
			</Allotment>
		</div>
	);
};

export default ProblemPage;