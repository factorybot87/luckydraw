import React from 'react'
import style from './style.scss'

interface Props {
  name: string
  value: any
  type?: string
  label?: string
  onChange?: () => void
}

export default function Input({ name, value, type = 'text', label, onChange }: Props) {
  return (
    <div className={style.input}>
      {label && <label>{label}</label>}
      <input name={name} type={type} value={value} onChange={onChange} />
    </div>
  )
}
