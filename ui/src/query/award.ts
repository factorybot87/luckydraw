import { gql } from '@apollo/client'

const AwardFragment = {
  detail: gql`
    fragment AwardData on Award {
      content
      id
      price
      provider
      winner
    }
  `
}

export const AWARD_LIST_QUERY = gql`
  query AwardsList {
    awards {
      ...AwardData
    }
  }
  ${AwardFragment.detail}
`
