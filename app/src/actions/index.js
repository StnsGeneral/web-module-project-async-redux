// https://animechan.vercel.app/api/random
import axios from 'axios';
export const SET_FETCHING_QUOTE = 'SET_FETCHING_QUOTE';
export const QUOTE_FETCH_SUCCESS = 'QUOTE_FETCH_SUCCESS';
export const FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE';

export const getRandomQuote = () => (dispatch) => {
  // transition state to isFetching = true
  dispatch({
    type: SET_FETCHING_QUOTE,
  });

  axios
    .get('https://www.tronalddump.io/random/quote')
    .then((res) => {
      dispatch({ type: QUOTE_FETCH_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_QUOTE_FAILURE, payload: JSON.stringify(err) });
    });
};
