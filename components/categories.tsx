/*
import { CategoryIdType } from '../types/graphql-global-types';
import { CategoryById } from 'graphql/__generated__/CategoryById';
import { CategoriesByEdges } from '../graphql/__generated__/CategoriesByEdges';
*/

export default function Categories({ categories }: any): JSX.Element {
	return (
		<div className='max-w-2xl mx-auto text-center flex flex-row justify-center mt-2'>
			<span className='text-xs text-center'>
				{categories.edges.npdelength > 0 ? (
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
