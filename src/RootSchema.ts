import { GraphQLSchema, GraphQLObjectType, GraphQLList } from 'graphql' 
import { GraphQLString } from 'graphql' // Scalar types.
import fetch from 'node-fetch'

// Resolve with automatically use object property if specified.
// Means we can just declare a type.
export const RootSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'crypto',
        fields: () => ({
            coins: { 
                type: GraphQLList(GraphQLString),
                resolve: async () => {
                    const data = await fetch('https://www.coinpalette.com/coins')
                    const json = await data.json()
                    return json.coins;
                }
            }
        })
    })
})