import React from 'react'
import './App.scss'
import test from './test.module.scss'
import testB from './testB.module.scss'

export default function App() {
  return (
    <>
      {/* <h1 className={style.test}>React + TypeScript + Webpack Test123</h1> */}
      <h1 className='test'>React + TypeScript + Webpack Test123</h1>
      <h4 className={test.color1}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, voluptatibus, cumque consequatur quo ipsa
        debitis libero ut, voluptas expedita alias iste placeat a nam porro. Fuga laboriosam est possimus dolor.
      </h4>
      <h4 className={testB.color1}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, voluptatibus, cumque consequatur quo ipsa
        debitis libero ut, voluptas expedita alias iste placeat a nam porro. Fuga laboriosam est possimus dolor.
      </h4>
    </>
  )
}
