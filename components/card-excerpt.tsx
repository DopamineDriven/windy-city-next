import ReactMarkdown from 'react-markdown/with-html';

interface CardExcerptProps {
	excerpt: string;
}

const CardExcerpt = ({ excerpt }: CardExcerptProps): JSX.Element => {
	return (
		<div className='w-full text-left transition-transform duration-500 transform px-portfolio sm:px-portfolioDivider mb-portfolio sm:mb-portfolioDivider lg:mb-0 sm:pb-portfolio h-paddingAboutTitleRight lg:h-aboutHackingFontAwesomePT overflow-y translate-y-portfolio font-somaRoman'>
			<ReactMarkdown
				escapeHtml={false}
				source={excerpt}
				className=' text-customTitle sm:text-customS lg:text-customCardTitle'
			/>
		</div>
	);
};

export default CardExcerpt;
// push
