import { PostObjectsConnectionOrderbyEnum } from '../types/graphql-global-types';

interface CardFilterProps {
	filter: PostObjectsConnectionOrderbyEnum;
	setFilter: (filter: PostObjectsConnectionOrderbyEnum) => void;
}
