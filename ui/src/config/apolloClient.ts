import { ApolloClient, gql, InMemoryCache, makeVar } from '@apollo/client'
import { Award, Candidate } from '@src/model/schema'

export const awardVar = makeVar<Award | undefined>(undefined)
export const winnerVar = makeVar<Candidate | undefined | null>(undefined)

const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        curAward: {
          read() {
            return awardVar()
          }
        },
        winner: {
          read() {
            return winnerVar()
          }
        }
      }
    }
  }
})

const typeDefs = gql`
  extend type Query {
    curAward: Award
    winner: Candidate
  }
`

const client = new ApolloClient({
  uri: 'http://localhost:4000/api',
  cache,
  typeDefs
})

export default client
