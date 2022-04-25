import { Routes, Route, Navigate, Link } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes" />} />
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/quotes/:quoteId/*" element={<QuoteDetail />}>
          <Route
            path=""
            element={
              <div className="centered">
                <Link className="btn--flat" to={`comments`}>
                  Load Comments
                </Link>
              </div>
            }
          />
          <Route path={`comments`} element={<Comments />} />
        </Route>
        <Route path="/new-quote" element={<NewQuotes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
