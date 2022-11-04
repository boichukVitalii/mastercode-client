'use client';

import { FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { githubDark } from '@uiw/codemirror-theme-github';

const CodeEditor: FC = () => {
	return (
		<CodeMirror
			value="console.log('hello world!');"
			height="calc(100vh - 2.75rem - 3.5rem - 17.1875rem)"
			extensions={[javascript()]}
			theme={githubDark}
		/>
	);
};

export default CodeEditor;