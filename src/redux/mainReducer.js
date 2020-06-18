import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn268113Reducer from '../features/SignIn268113/redux/reducers'
import SignIn41568110Reducer from '../features/SignIn41568110/redux/reducers'
import SignIn268096Reducer from '../features/SignIn268096/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn268113: SignIn268113Reducer,
SignIn41568110: SignIn41568110Reducer,
SignIn268096: SignIn268096Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});