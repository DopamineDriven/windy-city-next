import ReactMarkdown from 'react-markdown/with-html';

interface CardExcerptProps {
	excerpt: string;
}

const CardExcerpt = ({ excerpt }: CardExcerptProps) => {
	return (
		<div className='w-full text-left transition-transform duration-500 transform px-portfolio sm:px-portfolioDivider mb-portfolio sm:mb-portfolioDivider sm:pb-portfolio h-paddingAboutTitleRight overflow-y translate-y-portfolio font-somaRoman'>
			<ReactMarkdown
				escapeHtml={false}
				source={excerpt}
				className=' text-customTitle sm:text-customS'
			/>
		</div>
	);
};

export default CardExcerpt;
