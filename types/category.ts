import { Category } from 'wp-graphql';
import { DocumentNode } from 'graphql';

interface CategoryProps {
	node: DocumentNode & UniqueCategory;
}

interface UniqueCategory extends Category {
	posts: [];
}

// import { Category } from 'wp-graphql';
// import { DocumentNode } from 'graphql';

// interface Category {
// 	edges: {
// 		node: {
// 			name: string;
// 		};
// 	};
// }

export default CategoryProps;
