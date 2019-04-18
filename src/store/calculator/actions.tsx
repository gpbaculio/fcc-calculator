import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../index';
import {
  ON_NUM_CLICK,
  ON_OPERATOR_CLICK,
  ON_EQUAL_CLICK,
  ON_CLEAR_CLICK,
  ON_ZERO_CLICK,
  ON_DECIMAL_CLICK
} from './types';

export interface onClickArgs {
  keyVal: string | null;
  keyType: string;
}
export const onClick = (
  payload: onClickArgs
): ThunkAction<void, AppState, void, AnyAction> => (dispatch, _getState) => {
  if (payload.keyType === 'number') {
    dispatch({ type: ON_NUM_CLICK, payload });
  } else if (payload.keyType === 'operator') {
    dispatch({ type: ON_OPERATOR_CLICK, payload });
  } else if (payload.keyType === 'equal') {
    dispatch({ type: ON_EQUAL_CLICK });
  } else if (payload.keyType === 'zero') {
    dispatch({ type: ON_ZERO_CLICK, payload });
  } else if (payload.keyType === 'decimal') {
    dispatch({ type: ON_DECIMAL_CLICK, payload });
  }
};
export const onClear = (): ThunkAction<void, AppState, void, AnyAction> => (
  dispatch,
  _getState
) => {
  dispatch({ type: ON_CLEAR_CLICK });
};
