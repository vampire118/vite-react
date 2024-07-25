import './App.css'
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
    </>
  )
}

export default App
