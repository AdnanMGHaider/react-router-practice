import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Adnan", text: "Learning React Router is fun" },
  { id: "q2", author: "Steve", text: "Web development is amazing" },
];

function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}

export default AllQuotes;
