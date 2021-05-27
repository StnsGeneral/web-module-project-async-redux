import React from 'react';
import { connect } from 'react-redux';

import { getRandomQuote } from '../actions';

const Tronald = ({ quote, isFetching, error, ...props }) => {
  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching a true quote!</h2>;
  }

  return (
    <div>
      <h4>{quote.value}</h4>
      <button onClick={() => props.getRandomQuote()}>Get FAKE NEWS!</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getRandomQuote })(Tronald);
