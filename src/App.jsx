import { createContext, useState } from 'react'
import './App.css'
import Contact from './components/Contact'
import ContactList from './components/ContactList'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const listContext = createContext()
function App() {
  const [employeeList,setEmployeeList] = useState([]);

  return (
    <listContext.Provider value={{employeeList,setEmployeeList}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contact/>}></Route>
          <Route path="/create" element={<ContactList/>}></Route>
        </Routes>
      </BrowserRouter>
    </listContext.Provider>
  )
}
export {listContext}

export default App
