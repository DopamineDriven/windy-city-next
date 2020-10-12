import {
	PostObjectsConnectionOrderbyEnum,
	OrderEnum
} from '../types/graphql-global-types';
import classNames from 'classnames';
import { useState } from 'react';

interface CardFilterProps {
	filter: PostObjectsConnectionOrderbyEnum;
	setFilter: (filter: PostObjectsConnectionOrderbyEnum) => void;
	orderSelect: OrderEnum;
	setOrderSelect: (orderSelect: OrderEnum) => void;
}

const { ASC, DESC } = OrderEnum;
const { AUTHOR, DATE, MODIFIED, TITLE } = PostObjectsConnectionOrderbyEnum;

const Dropdown = ({ filter, setFilter }: CardFilterProps) => {
	const [active, setActive] = useState(false);

	const buttonClasses = `inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-blue-500 active:text-gray-200 transition ease-in-out duration-150`;
};
