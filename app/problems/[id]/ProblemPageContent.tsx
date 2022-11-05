'use client';

import { FC, useState } from 'react';
import { Allotment } from 'allotment';
import CodeEditor from './CodeEditor';
import ManagePanel from './ManagePanel';

interface ProblemPageContent {
	props?: any,
}

enum SelectedPanel {
	Desc,
	Sol,
}

const ProblemPageContent: FC<ProblemPageContent> = ({ props }) => {
	const [colorDesc, setColorDesc] = useState('bg-main-blue');
	const [colorSol, setColorSol] = useState('bg-command-blue');
	const [selectedPanel, setSelectedPanel] = useState(SelectedPanel.Desc);

	const switchToDesc = (e) => {
		setSelectedPanel(SelectedPanel.Desc);
		setColorDesc('bg-main-blue');
		setColorSol('bg-command-blue');
	};

	const switchToSol = (e) => {
		setSelectedPanel(SelectedPanel.Sol);
		setColorSol('bg-main-blue');
		setColorDesc('bg-command-blue');
	};

	return (
		<Allotment className='flex'>
			<Allotment.Pane snap minSize={400} preferredSize={650}>
				<ManagePanel>
					<div
						className={'h-11 border-t border-r border-nav-blue pt-2 cursor-pointer w-24 ' + colorDesc}
						onClick={switchToDesc}
					>
						<div className='text-center'>Description</div>
					</div>
					<div
						className={'h-11 border-t border-r border-nav-blue pt-2 cursor-pointer w-24 ' + colorSol}
						onClick={switchToSol}
					>
						<div className='text-center'>Solution</div>
					</div>
				</ManagePanel>
				{
					selectedPanel === SelectedPanel.Desc
						?
						<div className='px-2 mt-3'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus beatae qui praesentium reiciendis sint nemo non, aut animi eius repellat unde libero vitae sit cupiditate vero fugiat quia alias labore.
						</div>
						:
						<div className='px-2 mt-3'>
							Here we have your SOLUTION.
						</div>
				}
			</Allotment.Pane>
			<Allotment.Pane minSize={500}>
				<Allotment vertical>
					<Allotment.Pane minSize={300} className='flex flex-col'>
						<ManagePanel>
							<div className='w-full justify-between flex'>
								<div className='ml-8 text-command-blue'>
									<select className='form-select rounded-md py-0'>
										<option value='js'>JavaScript</option>
										<option value='py'>Python</option>
									</select>
								</div>
								<div className='mr-4 justify-between w-56 flex'>
									<button className='bg-orange-400 rounded-md px-3 hover:bg-orange-500 ml-10'>
										Run code
									</button>
									<button className='bg-lime-700 rounded-md px-3 hover:bg-lime-800'>Submit</button>
								</div>
							</div>
						</ManagePanel>
						<CodeEditor />
					</Allotment.Pane>
					<Allotment.Pane preferredSize={275} minSize={275} maxSize={275}>
						<ManagePanel>
							<span className='ml-4'>Console</span>
						</ManagePanel>
						<div className='bg-github-dark min-w-fit h-[70%] mx-4 my-5 rounded-md'></div>
					</Allotment.Pane>
				</Allotment>
			</Allotment.Pane>
		</Allotment>
	);
};

export default ProblemPageContent;