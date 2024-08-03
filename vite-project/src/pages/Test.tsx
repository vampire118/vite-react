import React from 'react'
import Counter from '../components/Counter'
import FirstComponent from '../components/FirstComponent'
import SecondComponent from '../components/SecondComponent'
const Test = () => {
    return (
        <>
          <FirstComponent />
          <SecondComponent
            title={'This is second component title'}
            content={'This is second component content'}
          />
          <Counter />
          <h3 className="text-3xl font-bold underline text-red-600">
            Simple React Typescript Tailwind Sample
          </h3>
        </>
    )
}

export default Test