import { EMPLOYEES_FETCH } from '../actions/types';


const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case EMPLOYEES_FETCH:
        return action.payload;
      default:
          return state;
    }
};
