import Date from 'components/date';
import { Fragment } from 'react';

interface AvatarProps {
	name: string;
	date: string;
	avatar: string;
}

const Avatar = ({ name, date, avatar }: AvatarProps): JSX.Element => {
	const ImageJsx = (): JSX.Element => (
		<div className='block float-right col-span-1 text-right align-middle transition-all duration-500 transform pl-portfolio'>
			<img
				src={avatar}
				className='block mx-auto rounded-full sm:w-paddingPostTitleTop sm:h-paddingPostTitleTop w-aboutHackingFontAwesomePT h-aboutHackingFontAwesomePT'
				alt={`avatar for ${name}`}
			/>
		</div>
	);

	const NombreJsx = (): JSX.Element => (
		<div className='block col-span-3 align-top text-customAboutSubMobile sm:text-customS'>
			<a className='block w-full'>{name}</a>
		</div>
	);

	const ColSpanJsx = (): JSX.Element => <div className='col-span-1'></div>;

	const ModifiedJsx = (): JSX.Element => (
		<div className='block float-left col-span-3 text-left align-top text-tertiary'>
			<a className='block w-full transition-all transform -translate-y-portfolioLS text-customCardDateMobile sm:text-customCardAuthorDate'>
				<Date modifiedString={date} />
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
