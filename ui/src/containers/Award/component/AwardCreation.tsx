import React from 'react'
import Input from '@src/components/Input/Input'
import style from './AwardItemStyle.scss'

enum AwardKey {
  Provider = 'provider',
  Content = 'content'
}

interface AwardCreationBody {
  [AwardKey.Provider]?: string
  [AwardKey.Content]?: string
}

const DEFAULT_ERROR: AwardCreationBody = {
  [AwardKey.Provider]: 'Provider Error',
  [AwardKey.Content]: 'Content Error'
}

const AwardForm = ({
  values,
  errors,
  onChange
}: {
  values: AwardCreationBody
  errors: AwardCreationBody
  onChange: (data: AwardCreationBody) => void
}) => {
  const handleChange = (name: string, value: any) => onChange({ ...values, [name]: value })

  return (
    <div className={style.donateContent}>
      <form>
        <Input
          name={AwardKey.Provider}
          label='乾爹乾媽'
          value={values[AwardKey.Provider]}
          error={errors[AwardKey.Provider]}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <Input
          name={AwardKey.Content}
          value={values[AwardKey.Content]}
          label='乾爹乾媽ㄉ心意'
          error={errors[AwardKey.Content]}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </form>
    </div>
  )
}

export default function AwardCreation() {
  const [formValue, setFormValues] = React.useState<AwardCreationBody>({})
  const [formErrors, setFormErrors] = React.useState<AwardCreationBody>({})

  const handleSubmit = () => {
    const error: AwardCreationBody = { ...DEFAULT_ERROR }

    Object.values(AwardKey).forEach((key) => {
      if (formValue[key]) delete error[key]
    })

    setFormErrors(error)
    if (Object.values(error).length === 0) {
      console.log(formValue)
      return
    }
  }

  return (
    <div className={style.container}>
      <div className={style.donateContent}>
        <p>我要當乾爹</p>
        <p>我要當乾媽</p>
      </div>
      <AwardForm values={formValue} errors={formErrors} onChange={setFormValues} />
      <div className={style.donateButton} onClick={handleSubmit}>
        捐 Donate 寄付
      </div>
    </div>
  )
}
