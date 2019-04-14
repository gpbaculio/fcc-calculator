import { CalculatorState } from './types';

export const initialState: CalculatorState = {
  formula: '1+1',
  display: '0'
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
