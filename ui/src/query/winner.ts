import { gql } from '@apollo/client'

export const CHOOSE_WINNER = gql`
  mutation ChooseWinner($awardId: ID!) {
    drawWinner(awardId: $awardId) {
      id
      name
      isWinner
    }
  }
`
