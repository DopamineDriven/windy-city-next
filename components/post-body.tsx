import markdownStyles from 'components/post-body.module.css';
import ReactMarkdown from 'react-markdown/with-html';
import {
	Prism as SyntaxHighlighter,
	SyntaxHighlighterProps
} from 'react-syntax-highlighter';

interface PostBodyProps {
	content: string;
}

const CodeBlock = ({
	language,
	value
}: SyntaxHighlighterProps): JSX.Element => {
	return (
		<SyntaxHighlighter
			language={language}
			useInlineStyles={true}
			className=' text-shadow-none'
		>
			{value}
			{/* {children.replace(/^\s+|\s+$/g, '')} */}
		</SyntaxHighlighter>
	);
};

const PostBody = ({ content }: PostBodyProps): JSX.Element => {
	return (
		<div className='text-shadow-none shadow-none select-none mx-auto content-center text-left md:text-left md:text-customP items-center justify-center align-middle max-w-xsCardGridCima '>
			<ReactMarkdown
				className={markdownStyles['content'] + ' text-shadow-none'}
				escapeHtml={false}
				source={content}
				renderers={{ code: CodeBlock }}
			/>
		</div>
	);
};

export default PostBody;
