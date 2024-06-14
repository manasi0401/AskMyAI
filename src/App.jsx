import React, {useContext} from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import { Context } from './context/Context'

const App = () => {
  const context=useContext(Context)
  return (
    <>
    <Sidebar/>
    <Main />
    </>
  )
} 

export default App