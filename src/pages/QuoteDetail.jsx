import { useParams, Route, Routes, Link } from "react-router-dom"
import Comments from '../comments/Comments'
import HighlightedQuote from "./HighlightedQuote"

const DUMMY = [
  {id: 'q1', author: 'Max', text: 'Learning react is fun!'},
  {id: 'q2', author: 'Maxmilian', text: 'Learning react is great!'},
]

function QuoteDetail() {
    const {quoteId} = useParams()
    const quote = DUMMY.find( quote => quote.id === quoteId)

    if (!quote) <p>No quote found!</p>


  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Routes>
          <Route path={`/quotes/${quoteId}/comments`} element={<Comments />} />
      </Routes>
    </>
  )
}

export default QuoteDetail