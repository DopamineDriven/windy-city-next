import SiteDivider from 'components/site-divider';

type AvatarProps = {
	author: any;
};

export default function Avatar({ author }: any) {
	const nombre =
		author.firstName && author.lastName
			? `${author.firstName} ${author.lastName}`
			: author.name;

	return (
		<>
			<div className='flex w-full items-center text-center align-middle justify-center rounded-full overflow-hidden'>
				<div>
					<img
						src={author.avatar.url}
						className='h-20 w-20 rounded-full border-tinyHouseWhite border-collapse border-opacity-50 border-4'
						alt={nombre}
					/>
				</div>
			</div>
			<div className='flex text-md font-semibold w-full items-center text-center align-middle justify-center'>
				<h2>{nombre}</h2>
			</div>
		</>
	);
}
