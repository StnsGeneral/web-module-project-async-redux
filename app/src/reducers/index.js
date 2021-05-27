import {
  SET_FETCHING_QUOTE,
  QUOTE_FETCH_SUCCESS,
  FETCH_QUOTE_FAILURE,
} from '../actions';

const initialState = {
  quote: {},
  isFetching: false,
  error: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FETCHING_QUOTE:
      return {
        ...state,
        isFetching: true,
      };
    case QUOTE_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        quote: { ...action.payload },
      };
    case FETCH_QUOTE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
