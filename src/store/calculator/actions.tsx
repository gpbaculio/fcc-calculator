import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../index';
import { ON_CLICK } from './types';

export interface onClickArgs {
  keyVal: string;
  keyType: string;
}
export const onClick = ({
  keyVal,
  keyType
}: onClickArgs): ThunkAction<void, AppState, void, AnyAction> => (
  dispatch,
  _getState
) => {
  dispatch({ type: ON_CLICK, payload: { keyVal, keyType } });
};
