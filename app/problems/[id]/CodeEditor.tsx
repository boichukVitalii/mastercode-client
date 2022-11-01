'use client';

import { FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { githubDark } from '@uiw/codemirror-theme-github';

const CodeEditor: FC = () => {
	return (
		<div className='h-full overflow-auto'>
			<CodeMirror
				value="console.log('hello world!');"
				height="calc(100vh - 2.75rem)"
				extensions={[javascript()]}
				theme={githubDark}
			/>
		</div>
	);
};

export default CodeEditor;