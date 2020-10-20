export default function Categories({ categories }: any): JSX.Element {
	return (
		<div className='max-w-2xl mx-auto text-center flex flex-row justify-center mt-2'>
			<span className='text-xs text-center'>
				{categories.edges.length > 0 ? (
					categories.edges.map((category: any, index: any) => (
						<span
							key={index}
							className='inline-block bg-customGray hover:bg-iconHover transition-colors leading-relaxed duration-500 cursor-pointer rounded-full my-1 px-3 py-1 text-sm font-semibold mx-1 text-white'
						>
							#{category.node.name}&nbsp;
						</span>
					))
				) : (
					<span className='ml-1'>{categories.edges.node.name}</span>
				)}
			</span>
		</div>
	);
}

/*
import { CategoryIdType } from '../types/graphql-global-types';
import {
	CategoriesByEdgesReturnName_categories_edges_node as CategoryName,
	CategoriesByEdgesReturnName_categories_edges_node as CategoryEdgesNode,
	CategoriesByEdgesReturnName_categories as CategoriesByEdges,
	CategoriesByEdgesReturnName_categories_edges as CategoriesTyped,
	CategoriesByEdgesReturnName as Category
} from '../graphql/__generated__/CategoriesByEdgesReturnName';

export interface CategoriesProps {
	categories: CategoriesTyped;
	edges: CategoriesByEdges;
	// node: CategoryEdgesNode;
}

export default function Categories({
	categories
}: CategoriesProps): JSX.Element {
	let node: CategoryEdgesNode;
	const { NAME } = CategoryIdType;
	return (
		<div className='max-w-2xl mx-auto text-center flex flex-row justify-center mt-2'>
			<span className='text-xs text-center'>
				{[categories].length > 0 ? (
					[categories].map((category: CategoriesTyped, index: any) => {
					return	(
							<span
								className='inline-block bg-customGray hover:bg-iconHover transition-colors leading-relaxed duration-500 cursor-pointer rounded-full my-1 px-3 py-1 text-sm font-semibold mx-1 text-white'
								key={index}
							>
							#{category}&nbsp;
							</span>
						)
					})
				) : (
					<span className='ml-1'>{categories.node?.name}</span>
				)}
			</span>
		</div>
	);
}
*/

/*
export default function Categories({ categories }: any): JSX.Element {
	return (
		<div className='max-w-2xl mx-auto text-center flex flex-row justify-center mt-2'>
			<span className='text-xs text-center'>
				{categories.edges.length > 0 ? (
					categories.edges.map((category: any, index: any) => (
						<span
							key={index}
							className='inline-block bg-customGray hover:bg-iconHover transition-colors leading-relaxed duration-500 cursor-pointer rounded-full my-1 px-3 py-1 text-sm font-semibold mx-1 text-white'
						>
							#{category.node.name}&nbsp;
						</span>
					))
				) : (
					<span className='ml-1'>{categories.edges.node.name}</span>
				)}
			</span>
		</div>
	);
}
*/
