import React from 'react'
import Input from '@src/components/Input/Input'
import style from './AwardItemStyle.scss'

enum AwardKey {
  Content = 'content',
  Price = 'price'
}

// interface AwardCreationBody {
//   [AwardKey.Content]?: string
//   [AwardKey.Price]?: number
// }

const AwardForm = () => {
  return (
    <div className={style.donateContent}>
      <form>
        <Input name={AwardKey.Content} label='乾爹乾媽' value='123' />
        <Input name={AwardKey.Price} label='心意' value='123' />
      </form>
    </div>
  )
}

export default function AwardCreation() {
  //   const [formValue,handleForm]=useState<AwardCreationBody|null>(null)

  return (
    <div className={style.container}>
      <div className={style.donateContent}>
        <p>我要當乾爹</p>
        <p>我要當乾媽</p>
      </div>
      <AwardForm />
      <div className={style.donateButton}>捐 Donate 寄付</div>
    </div>
  )
}
