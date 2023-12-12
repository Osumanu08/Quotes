import { Navigate, Route, Routes } from "react-router-dom"

import AllQuotes from "./pages/AllQuotes"
import QuoteDetail from "./pages/QuoteDetail"
import NewQuote from "./pages/NewQuote"
import Layout from "./layout/Layout"
import NotFound from "./pages/NotFound"



function App() { 
  return (
      <Layout>
        <Routes>
          <Route path="/" exact  element={<Navigate replace to={'quotes'} /> } />
          <Route path="/quotes" exact element={<AllQuotes /> } />
          <Route path="/quotes/:quoteId/" element={<QuoteDetail /> } />
          <Route path="/new-quote" element={<NewQuote /> } />
          <Route path="/notfound" element={<NotFound /> }/>
        </Routes>
      </Layout>
  )
}

export default App