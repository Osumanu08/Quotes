import { useNavigate } from "react-router-dom";

import QuoteForm from "../component/QuoteForm"


function NewQuote() {
  const navigate = useNavigate()
  function addQuoteHandler(quoteData) {
    console.log(quoteData);
    navigate('/quotes/')
  }
   
  return (
    <QuoteForm onAddQuote={addQuoteHandler}/>
  )
}

export default NewQuote