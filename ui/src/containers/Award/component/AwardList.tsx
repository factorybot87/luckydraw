import React from 'react'
import { useQuery } from '@apollo/client'

import style from './AwardListStyle.scss'
import logo from '../../../assets/access-logo.png'
import AwardItem from './AwardItem'
import { AWARD_LIST_QUERY } from '../../../query/award'
import { AwardsList } from '../../../__generated__/AwardsList'
import AwardCreation from './AwardCreation'

function AwardList() {
  const { data: awardsListData } = useQuery<AwardsList>(AWARD_LIST_QUERY)

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1>
          <img src={logo} className={style.logo} />
          <span>&nbsp;賞品一覧 PRIZE LIST</span>
        </h1>
      </div>
      <div className={style.content}>
        <AwardCreation />
        {awardsListData?.awards?.map((e) => (
          <AwardItem key={e.id} award={e} />
        ))}
      </div>
    </div>
  )
}
export default AwardList
