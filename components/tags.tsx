type TagProps = {
	tags:
		| {
				edges: any;
		  }
		| any;
};

export default function Tags({ tags }: TagProps) {
	return (
		<div className='max-w-2xl mx-auto text-center'>
			<p className='mt-8 text-lg font-bold'>
				{tags.edges.map((tag: any, index: any) => (
					<span
						key={index}
						className='inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2'
					>
						#{tag.node.name}
					</span>
				))}
			</p>
		</div>
	);
}
