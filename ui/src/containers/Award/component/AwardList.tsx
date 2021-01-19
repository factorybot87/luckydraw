import React, { useMemo } from 'react'
import { useQuery } from '@apollo/client'

import style from './AwardListStyle.scss'
import logo from '../../../assets/access-logo.png'
import AwardItem from './AwardItem'
import { AWARD_LIST_QUERY } from '../../../query/award'
import { AwardsList } from '../../../__generated__/AwardsList'
import AwardCreation from './AwardCreation'
import Loading from '@src/components/Loading'

function AwardList() {
  const { data: awardsListData, loading } = useQuery<AwardsList>(AWARD_LIST_QUERY, { fetchPolicy: 'network-only' })

  const sortList = useMemo(
    () =>
      awardsListData?.awards &&
      awardsListData.awards.slice().sort((award1, award2) => {
        console.log('award', award1, award2)

        return Number(award1?.id) - Number(award2?.id)
      }),
    [awardsListData]
  )

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1>
          <img src={logo} className={style.logo} />
          <span>&nbsp;賞品一覧 PRIZE LIST</span>
        </h1>
      </div>
      <div className={style.content}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <AwardCreation />
            {sortList?.map((e) => e && <AwardItem key={e.id} award={e} />)}
          </>
        )}
      </div>
    </div>
  )
}
export default AwardList
