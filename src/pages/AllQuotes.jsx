import QuoteList from '../component/QuoteList'

const DUMMY = [
  {id: 'q1', author: 'Max', text: 'Learning react is fun!'},
  {id: 'q2', author: 'Maxmilian', text: 'Learning react is great!'},
]

function AllQuotes() {
  return (
    <QuoteList quotes={DUMMY}/>
  )
}

export default AllQuotes