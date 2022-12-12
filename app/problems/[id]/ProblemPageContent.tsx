'use client';

import React, { FC, useState } from 'react';
import { Allotment } from 'allotment';
import CodeEditor from './CodeEditor';
import ManagePanel from './ManagePanel';
import { Problem } from '../problems';
import { LOCAL_STORAGE_CODE_KEY } from './problem.constants';
import fetcher from '../../../utils/fetcher';
import { IResponseCompiler, Verdict } from './compiler.d';
import SpinLoader from './spinLoader';

const COMPILER_URL = 'http://localhost:5000/api/compiler';

interface ProblemPageContent {
	problem: Problem,
}

enum SelectedPanel {
	Desc,
	Sol,
}

const ProblemPageContent: FC<ProblemPageContent> = ({ problem }) => {
	const storedCodeBuffer = Buffer.from(localStorage.getItem(LOCAL_STORAGE_CODE_KEY + problem.id) || []);

	const [colorDesc, setColorDesc] = useState<string>('bg-main-blue');
	const [colorSol, setColorSol] = useState<string>('bg-command-blue');
	const [selectedPanel, setSelectedPanel] = useState<SelectedPanel>(SelectedPanel.Desc);
	const [code, setCode] = useState<Buffer>(storedCodeBuffer);
	const [compilerResponse, setCompilerResponse] = useState<IResponseCompiler>();
	const [disable, setDisable] = useState<boolean>(false);
	const [btnStyle, setBtnStyle] = useState<string>('hover:bg-orange-500');
	const [loading, setLoading] = useState<boolean>(false);

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

	const getCode = (usercode: string) => {
		const codeBuffer = Buffer.from(usercode);
		setCode(codeBuffer);
	};

	const fetchCompiledInfo = async (e) => {
		setDisable(true);
		setBtnStyle('opacity-60');
		setLoading(true);
		const response: IResponseCompiler = await fetcher(COMPILER_URL, 'POST',
			{
				lang: 'js',
				code,
				problemId: problem.id
			},
			{
				'Content-type': 'application/json; charset=UTF-8'
			}
		);
		setCompilerResponse(response);
		setDisable(false);
		setBtnStyle('hover:bg-orange-500');
		setLoading(false);
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
							<div>{problem.description}</div>
							<ul className='pt-4 pl-2 list-disk'>
								<p>Constraints:</p>
								{problem.constraints?.map((e, i) => (
									<li key={i} className='pt-1'><p>{e}</p></li>
								))}
							</ul>
						</div>
						:
						<div className='px-2 mt-3'>
							{problem.solution}
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
										{/* <option value='py'>Python</option> */}
									</select>
								</div>
								<div className='mr-4 justify-between w-56 flex'>
									<button
										className={'bg-orange-400 rounded-md px-3 ml-32 ' + btnStyle}
										onClick={fetchCompiledInfo}
										disabled={disable}
									>
										Run code
									</button>
									{/* <button className='bg-lime-700 rounded-md px-3 hover:bg-lime-800'>
										Submit
									</button> */}
								</div>
							</div>
						</ManagePanel>
						<CodeEditor getCode={getCode} pageID={problem.id} />
					</Allotment.Pane>
					<Allotment.Pane preferredSize={275} minSize={275} maxSize={275}>
						<ManagePanel>
							<span className='ml-4'>Console</span>
						</ManagePanel>
						<div className={'bg-github-dark min-w-fit h-[70%] mx-4 my-5 rounded-md pt-2 pl-2 pr-2 pb overflow-x-hidden overflow-y-auto flex ' + (loading ? 'justify-center items-center' : '')}>
							{loading ? (
								<SpinLoader />
							) : (
								compilerResponse?.verdict === Verdict.Accepted
									? (
										<div className='pl-2 pt-2 pr-2 w-full flex justify-between'>
											<div className='text-xl text-green-600'>{compilerResponse?.verdict}</div>
											<div className='text-slate-300'>Run time: {compilerResponse?.runTime} sec</div>
										</div>
									)
									: compilerResponse?.verdict === Verdict.WrongAnswer
										? (
											<div className='flex flex-col w-full'>
												<div className='pl-2 pt-2 pr-2 flex justify-between'>
													<div className='text-xl text-red-600'>{compilerResponse?.verdict}</div>
													<div className='text-slate-300'>Run time: {compilerResponse?.runTime} sec</div>
												</div>
												<div className='pt-2'>{compilerResponse?.logs}</div>
											</div>
										)
										: compilerResponse?.verdict === Verdict.Error
											? (
												<div className='flex flex-col'>
													<div className='text-xl text-red-600 pl-2 pt-2'>{compilerResponse?.verdict}</div>
													<div className='pt-2 pl-1 flex flex-col'>
														{
															compilerResponse?.logs
																.split(',')
																.filter((s) => !!s && s !== ' ^')
																.map((s, i) => (
																	<div key={i}>{s}</div>
																))
														}
													</div>
												</div>
											)
											: (<></>)
							)}
						</div>
					</Allotment.Pane>
				</Allotment>
			</Allotment.Pane >
		</Allotment >
	);
};

export default ProblemPageContent;