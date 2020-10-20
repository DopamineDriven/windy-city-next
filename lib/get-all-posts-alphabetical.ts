import { GraphQLObjectType } from 'graphql';
import { fetchAPI } from 'lib/api';

/*
 const RGBType = new GraphQLEnumType({
   name: 'RGB',
   values: {
     RED: { value: 0 },
     GREEN: { value: 1 },
     BLUE: { value: 2 }
   }
 });
*/
interface GetAllPostsForHomeAlphabeticalProps {
	preview: boolean;
	field: string;
	order: string;
}

const LandingPosts = new GraphQLObjectType({
	name: 'Landing',
	fields: {}
});

export default async function getAllPostsForHomeAlphabetical({
	preview,
	field,
	order
}: GetAllPostsForHomeAlphabeticalProps) {
	const data = await fetchAPI(
		`
    query AllPosts {
      posts(first: 35, where: { orderby: { field: ${field}, order: ${order} } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            modified
            social {
              facebook
              instagram
              twitter
              website
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
		{
			variables: {
				onlyEnabled: !preview,
				preview,
				field,
				order
			}
		}
	);
	console.log(typeof data, 'type of data.posts'); // data.posts: object, data: object, posts: undefined
	return data?.posts;
}

/**
 * Object Type Definition
 *
 * Almost all of the GraphQL types you define will be object types. Object types
 * have a name, but most importantly describe their fields.
 *
 * Example:
 *
 *     const AddressType = new GraphQLObjectType({
 *       name: 'Address',
 *       fields: {
 *         street: { type: GraphQLString },
 *         number: { type: GraphQLInt },
 *         formatted: {
 *           type: GraphQLString,
 *           resolve(obj) {
 *             return obj.number + ' ' + obj.street
 *           }
 *         }
 *       }
 *     });
 *
 * When two types need to refer to each other, or a type needs to refer to
 * itself in a field, you can use a function expression (aka a closure or a
 * thunk) to supply the fields lazily.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         name: { type: GraphQLString },
 *         bestFriend: { type: PersonType },
 *       })
 *     });
 *
 */
