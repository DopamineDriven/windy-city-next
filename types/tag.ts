import { Tag } from 'wp-graphql';
import { DocumentNode } from 'graphql';

interface TagProps {
	node: DocumentNode & Tag;
}

// interface Tag {
// 	edges: {
// 		node: {
// 			name: string;
// 		};
// 	};
// }

export default TagProps;
