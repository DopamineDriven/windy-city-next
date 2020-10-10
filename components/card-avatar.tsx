import Modified from 'components/date-modified';
import { authorProps } from 'types/posts';
import { Fragment } from 'react';

interface AvatarProps {
	author: authorProps;
	modified: string;
}

const Avatar = ({ author, modified }: AvatarProps): JSX.Element => {
	const nombre: string =
		author.firstName && author.lastName
			? `${author.firstName} ${author.lastName}`
			: author.name;
	const ImageJsx = (): JSX.Element => (
		<div className='block float-right col-span-1 text-right align-middle transition-all duration-1000 transform pl-portfolio lg:pl-portfolioDivider'>
			<img
				src={author.avatar.url}
				className='block mx-auto rounded-full lg:w-portfolioLSMobile lg:h-portfolioLSMobile sm:w-paddingPostTitleTop sm:h-paddingPostTitleTop w-aboutHackingFontAwesomePT h-aboutHackingFontAwesomePT'
				alt={`avatar for ${nombre}`}
			/>
		</div>
	);

	const NombreJsx = (): JSX.Element => (
		<div className='block col-span-3 align-top text-customAboutSubMobile sm:text-customS lg:text-customExcerpt'>
			<a className='block w-full'>{nombre}</a>
		</div>
	);

	const ColSpanJsx = (): JSX.Element => <div className='col-span-1'></div>;

	const ModifiedJsx = (): JSX.Element => (
		<div className='block float-left col-span-3 text-left align-top text-tertiary'>
			<a className='block w-full transition-all transform -translate-y-portfolioLS lg:-translate-y-portfolio text-customCardDateMobile sm:text-customCardAuthorDate lg:text-customExcerpt'>
				<Modified modifiedString={modified} />
			</a>
		</div>
	);

	return (
		<Fragment>
			<div className='grid grid-cols-4 overflow-hidden text-left transition-all transform ml-mdmxSocial items-left -translate-x-portfolioLSMobile sm:-translate-x-portfolio pt-portfolioDivider text-customCardAuthorDate'>
				<ImageJsx />
				<NombreJsx />
				<ColSpanJsx />
				<ModifiedJsx />
			</div>
		</Fragment>
	);
};

export default Avatar;
