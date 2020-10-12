import {
	PostObjectsConnectionOrderbyEnum,
	OrderEnum
} from '../types/graphql-global-types';
import classNames from 'classnames';
import { useState, Fragment, FC } from 'react';

interface CardFilterProps {
	filter: PostObjectsConnectionOrderbyEnum;
	setFilter: (filter: PostObjectsConnectionOrderbyEnum) => void;
	orderSelect: OrderEnum;
	setOrderSelect: (orderSelect: OrderEnum) => void;
}

const { ASC, DESC } = OrderEnum;
const { AUTHOR, DATE, MODIFIED, TITLE } = PostObjectsConnectionOrderbyEnum;

const CardFilter = ({ filter, setFilter }: CardFilterProps) => {
	const [active, setActive] = useState(false);

	const buttonClasses = `inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-blue-500 active:text-gray-200 transition ease-in-out duration-150`;

	const ButtonDrop = () => (
		<button
			onClick={active => setActive(!active)}
			className={` ${buttonClasses}`}
		>
			Sort By
		</button>
	);

	const OptionConfig = () => (
		<div className='inline-block w-portfolioLS'>
			<select
				value={filter}
				onChange={() => setFilter(filter)}
				className='block appearance-none w-full bg-primary text-primary border border-primary px-portfolioRS py-portfolioDivider leading-headerAbout focus:outline-none'
			></select>
			<option value={AUTHOR}>Author</option>
			<option value={DATE}>Date</option>
			<option value={MODIFIED}>Modified</option>
			<option value={TITLE}>Title</option>
		</div>
	);

	const DivConditional = () => (
		<div
			className={classNames(
				'origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg',
				{
					block: active,
					hidden: !active
				}
			)}
		></div>
	);
};

export default CardFilter;
