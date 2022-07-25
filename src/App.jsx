import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Form from "./Components/Form"
import HistoryCompany from "./Components/dataCompany/historyCompany"

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Form/>}></Route>
            <Route path="/history" element={<HistoryCompany/>}></Route>
        </Routes>
</BrowserRouter>
  )
}

export default App
