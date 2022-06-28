import { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDetail = () => {

    const routeMatch = useRouteMatch();
    const urlParams = useParams();
    const { quoteId } = urlParams;
    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);
    
    if (status === 'pending') {
        return (
          <div className='centered'>
            <LoadingSpinner />
          </div>
        );
    }
    
    if (error) {
        return <p className='centered'>{error}</p>;
    }
    
    if (!loadedQuote.text) {
        return <p>No quote found!</p>;
    }

    return (
        <Fragment>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
            <Route path={routeMatch.path} exact>
                <div className="centered">
                    <Link className='btn--flat' to={`${routeMatch.url}comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${routeMatch.path}/comments`}>
                <Comments/>
            </Route>
        </Fragment>
    );
};

export default QuoteDetail;