import { useParams, Outlet } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Adnan", text: "Learning React Router is fun" },
  { id: "q2", author: "Steve", text: "Web development is amazing" },
];

function QuoteDetail() {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Outlet />
    </>
  );
}

export default QuoteDetail;
