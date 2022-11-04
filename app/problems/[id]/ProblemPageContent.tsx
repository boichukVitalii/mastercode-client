'use client';

import { FC } from 'react';
import { Allotment } from 'allotment';
import CodeEditor from './CodeEditor';
import ManagePanel from './ManagePanel';

interface ProblemPageContent {
	props?: any,
}

const ProblemPageContent: FC<ProblemPageContent> = ({ props }) => {
	return (
		<Allotment className='flex'>
			<Allotment.Pane snap minSize={400} preferredSize={650}>
				<ManagePanel></ManagePanel>
				<div className='px-2 mt-3'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus beatae qui praesentium reiciendis sint nemo non, aut animi eius repellat unde libero vitae sit cupiditate vero fugiat quia alias labore.
				</div>
			</Allotment.Pane>
			<Allotment.Pane minSize={500}>
				<Allotment vertical>
					<Allotment.Pane minSize={300} className='flex flex-col'>
						<ManagePanel></ManagePanel>
						<CodeEditor />
					</Allotment.Pane>
					<Allotment.Pane preferredSize={275} minSize={275} maxSize={275}>
						<ManagePanel>
							<span className='ml-4'>Console</span>
						</ManagePanel>
					</Allotment.Pane>
				</Allotment>
			</Allotment.Pane>
		</Allotment>
	);
};

export default ProblemPageContent;