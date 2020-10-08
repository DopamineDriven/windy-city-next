import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCustomWebsite } from '../lib/fas-custom-integration';
import {
	faFacebook,
	faInstagram,
	faTwitter,
	faLinkedin,
	faGithub
} from '@fortawesome/free-brands-svg-icons';

type CardIconProps = {
	social: any;
};

// to edit icon size, target iconClass
const CardIcons = ({ social }: CardIconProps) => {
	const anchorClassNull =
		' items-center justify-center mx-portfolioDivider sm:mx-portfolioDivider mb-portfolioDivider text-customExcerpt sm:text-customTitletMobile inline-block leading-relaxed text-center align-middle transition-all duration-1000  fill-current bg-primary text-quinary focus:outline-none transform translate-x-portfolioDivider';
	const anchorClass =
		' items-center justify-center inline-block mx-portfolioDivider sm:mx-portfolioDivider mb-portfolioDivider text-customExcerpt sm:text-customTitleMobile leading-relaxed text-center align-middle transition-all duration-500 bg-primary hover:text-primary focus:outline-none transform translate-x-portfolioDivider';
	const iconClassNull =
		' flex font-extrabold text-center align-middle transition-all duration-1000 ease-in-out delay-300 transform lg:text-customTitle sm:text-customExcerptMobile text-customTitleMobile fa-portfolioDivider';
	const iconClass =
		' flex font-extrabold text-center align-middle transition-all duration-1000 ease-in-out delay-300 transform lg:text-customTitle sm:text-customExcerptMobile text-customTitleMobile hover:text-tertiary fa-portfolioDivider';
	return (
		<div className='block text-right align-middle'>
			<ul className='block align-middle'>
				<li className='align-middle'>
					{social.linkedin === null ? (
						<a
							aria-label='linkedin'
							target='__blank'
							href={social.linkedin}
							className={anchorClassNull}
						>
							{social.linkedin === '' ? (
								<></>
							) : (
								<FontAwesomeIcon icon={faLinkedin} className={iconClassNull} />
							)}
						</a>
					) : (
						<a
							aria-label='linkedin'
							target='__blank'
							href={social.linkedin}
							className={anchorClass}
						>
							{social.facebook === '' ? (
								<></>
							) : (
								<FontAwesomeIcon icon={faLinkedin} className={iconClass} />
							)}
						</a>
					)}
					{social.github === null ? (
						<a
							aria-label='github'
							target='__blank'
							href={social.github}
							className={anchorClassNull}
						>
							{social.github === '' ? (
								<></>
							) : (
								<FontAwesomeIcon icon={faGithub} className={iconClassNull} />
							)}
						</a>
					) : (
						<a
							aria-label='github'
							target='__blank'
							href={social.github}
							className={anchorClass}
						>
							{social.github === '' ? (
								<></>
							) : (
								<FontAwesomeIcon icon={faGithub} className={iconClass} />
							)}
						</a>
					)}
					{social.twitter === null ? (
						<a
							aria-label='twitter'
							target='__blank'
							href={social.twitter}
							className={anchorClassNull}
						>
							{social.twitter === '' ? (
								<></>
							) : (
								<FontAwesomeIcon icon={faTwitter} className={iconClassNull} />
							)}
						</a>
					) : (
						<a
							aria-label='twitter'
							target='__blank'
							href={social.twitter}
							className={anchorClass}
						>
							{social.twitter === '' ? (
								<></>
							) : (
								<FontAwesomeIcon icon={faTwitter} className={iconClass} />
							)}
						</a>
					)}
					{social.website === null ? (
						<a
							aria-label='website'
							target='__blank'
							href={social.website}
							className={anchorClassNull}
						>
							{social.website === '' ? (
								<></>
							) : (
								<FontAwesomeIcon icon={faCustomWebsite} className={iconClassNull} />
							)}
						</a>
					) : (
						<a
							aria-label='website'
							target='__blank'
							href={social.website}
							className={anchorClass}
						>
							{social.website === '' ? (
								<></>
							) : (
								<FontAwesomeIcon icon={faCustomWebsite} className={iconClass} />
							)}
						</a>
					)}
				</li>
			</ul>
		</div>
	);
};

export default CardIcons;
