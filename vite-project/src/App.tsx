import './App.css'
import Counter from './components/Counter'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'

function App() {

  return (
    <>
      <FirstComponent/>
      <SecondComponent 
        title={'This is second component title'}
        content = {'This is second component content'}
      />
      <Counter/>
    </>
  )
}

export default App
