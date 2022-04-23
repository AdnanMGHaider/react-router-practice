import { useParams, Outlet } from "react-router-dom";

function QuoteDetail() {
  const params = useParams();

  return (
    <>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <Outlet />
    </>
  );
}

export default QuoteDetail;
