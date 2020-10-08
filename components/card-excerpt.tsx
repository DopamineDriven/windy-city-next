import ReactMarkdown from 'react-markdown/with-html';

interface CardExcerptProps {
	excerpt: string;
}

const CardExcerpt = ({ excerpt }: CardExcerptProps): JSX.Element => {
	return (
		<div className='w-full text-left transition-transform duration-500 transform px-portfolio sm:px-portfolioDivider mb-portfolio sm:mb-portfolioDivider sm:pb-portfolio h-paddingAboutTitleRight lg:h-portfolioPadding overflow-y translate-y-portfolio font-somaRoman'>
			<ReactMarkdown
				escapeHtml={false}
				source={excerpt}
				className=' text-customTitle sm:text-customS lg:text-customExcerpt'
			/>
		</div>
	);
};

export default CardExcerpt;
