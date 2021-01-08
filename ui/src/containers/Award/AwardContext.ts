/* eslint-disable  @typescript-eslint/no-empty-function */
import { createContext } from 'react'

interface AwardContext {
  handleGetWinner: () => void
}

export default createContext<AwardContext>({
  handleGetWinner: () => {}
})
