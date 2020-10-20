import Avatar from './post-avatar';
import Date from './date-published';
import Modified from './date-modified';
import CoverImage, { CoverImageProps } from './post-cover-image';
import PostTitle from './post-title';
import Categories from './categories';
import CardIcons from './card-icons';
import SiteDivider from './site-divider';

type PostHeaderProps = {
	title: string;
	coverImage: CoverImageProps;
	author: any;
	date: string;
	modified: string;
	categories: any;
	slug: string | number;
	social: any;
};

export default function PostHeader({
	title,
	coverImage,
	date,
	modified,
	author,
	categories,
	social,
	slug
}: PostHeaderProps) {
	return (
		<>
			<div className='max-w-screen font-polished'>
				<div className='mb-4 md:mb-4 -mx-5 sm:mx-0'>
					<CoverImage
						title={coverImage?.title}
						coverImage={coverImage}
						slug={slug}
					/>
				</div>
				<PostTitle>{title}</PostTitle>

				<div className='max-w-4xl mx-auto align-middle content-center justified-center text-center'>
					<div className='hidden md:block align-middle content-center text-center justify-center'>
						<Avatar author={author} />
					</div>
					<div className='text-xs font-subpolished'>
						Published&nbsp;
						<Date dateString={date} />
					</div>
					<div className='text-xs font-subpolished'>
						Updated&nbsp;
						<Modified modifiedString={modified} />
					</div>

					<div className='block md:hidden w-inherit'>
						<Avatar author={author} />
					</div>
					<div className='flex flex-col'>
						<Categories categories={categories} />
					</div>
					<CardIcons social={social} />
				</div>

				<SiteDivider />
			</div>
		</>
	);
}

//	<Categories edges={categories.edges} categories={categories.categories} />
