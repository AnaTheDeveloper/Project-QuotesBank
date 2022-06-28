import React, {Suspense} from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

// import AllQuotes from './pages/AllQuotes';
// import QuoteDetail from './pages/QuoteDetail';
// import NewQuote from './pages/NewQuote';
// import NotFound from './pages/NotFound';

//LAZY LOADING
const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className='centered'>
        <LoadingSpinner />
        </div>}
      >
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes'/>
          </Route>

          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>

          <Route path='/quotes/:quoteId'>
            <QuoteDetail/>
          </Route>

          <Route path='/new-quote'>
            <NewQuote/>
          </Route>

          <Route path='*'>
            <NotFound/>
          </Route>

        </Switch>
      </Suspense>
    </Layout>
    
  );
}

export default App;
