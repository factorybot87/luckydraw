import React from 'react'
import style from './Home.scss'
import { routePath } from '@src/config/appConfig'
import CatImg from '@src/assets/lovely-cat.png'
import CoinPot from '@src/assets/coin-pot.png'
import Wheel from '@src/assets/wheel.png'
import LogoImg from '@src/assets/access-logo.png'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.catImg}>
            <img src={CatImg} />
          </div>
          <div className={style.titleContainer}>
            <img src={LogoImg} />
            <h3>{`忘年會ぼ\nうねんかい\nYEAR END PARTY`}</h3>
            <div className={style.tilt}>
              <div>{`LUCKY\nDRAW`}</div>
              <div>ガチャる</div>
            </div>
          </div>
        </div>
        <div className={style.row}>
          <Link to={routePath.award}>
            <div className={style.rectangle}>
              <div className={style.rowItem}>
                <img src={CoinPot} />
              </div>
              <div className={style.rowText}>賞品一覧 PRIZE LIST</div>
            </div>
          </Link>
        </div>
        <div className={style.rectangle}>
          <div className={style.rowItem}>
            <img className={style.wheel} src={Wheel} />
          </div>
          <div className={style.rowText}>抽起來 ガチャる DRAW</div>
        </div>{' '}
      </div>
    </>
  )
}
