import { DocumentNode } from 'graphql';

interface TagProps {
	node: DocumentNode & any;
}

// interface Tag {
// 	edges: {
// 		node: {
// 			name: string;
// 		};
// 	};
// }

export default TagProps;
