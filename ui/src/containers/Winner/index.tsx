import React from 'react'
import { useMutation, useReactiveVar } from '@apollo/client'
import { winnerVar, awardVar } from '@src/config/apolloClient'
import { useHistory } from 'react-router-dom'
import Loading from '@src/components/Loading'
import classnames from 'classnames'
import Button from '../../components/Button'
import style from './style.scss'
import goldIcon from '../../assets/gold_icon.svg'
import sound from '../../assets/winner01.mp3'
import { randomGif } from './randomGif'
import routes from '../../constants/routes'
import { GIVE_UP_AWARD_QUERY } from '@src/query/award'
import { GiveUpAward, GiveUpAwardVariables } from '@src/__generated__/GiveUpAward'
import AudioPlayer, { AudioMimeTypes } from '../../components/AudioPlayer'

const randomGifInstance = randomGif()

const Winner = ({}) => {
  const history = useHistory()
  const winner = useReactiveVar(winnerVar)
  const curAward = useReactiveVar(awardVar)
  const [giveUpAward, { error, loading }] = useMutation<GiveUpAward, GiveUpAwardVariables>(GIVE_UP_AWARD_QUERY, {
    onCompleted: () => {
      history.push(routes.award)
    },
    onError: (error) => {
      console.log(error)
    }
  })

  const priceText = curAward?.content
  const gif = randomGifInstance.get()

  const onAward = () => {
    history.push(routes.award)
  }

  const handleDonate = () => {
    if (curAward) {
      giveUpAward({ variables: { awardId: curAward.id } })
    }
  }

  if (loading) return <Loading />
  if (!winner) return null
  return error ? (
    <>
      <div>Something went Wrong :( </div>
      {error.networkError?.message}
      {error.graphQLErrors.map(({ message }, idx) => (
        <div key={idx}>{message}</div>
      ))}
    </>
  ) : (
    <>
      <div className={style.winner}>
        <img className={style.winner_gif_container} src={gif} alt='' />
        <div className={style.result}>
          <div className={style.result_award}>
            <div>{priceText}</div>
            <img className={style.result_goldIcon} src={goldIcon} alt='gold' />
          </div>
          <div className={style.result_name}>
            <h1 className={style.text_animation}>
              <span>{winner.name}</span>
              <span>Winner</span>
            </h1>
          </div>
        </div>
        <p className={classnames(style.text_animation, style.congratulation)}>
          <span>Congratulations!!!</span>
        </p>
      </div>
      <div className={style.options}>
        <Button className={style.options_award} onClick={onAward}>
          Awards
        </Button>
        {curAward && (
          <Button className={style.options_donate} onClick={handleDonate}>
            Donate
          </Button>
        )}
      </div>
      <AudioPlayer url={sound} type={AudioMimeTypes.mpeg} />
    </>
  )
}

export default Winner
