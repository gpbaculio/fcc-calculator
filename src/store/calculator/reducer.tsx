import {
  CalcState,
  CalcActionTypes,
  ON_CLICK,
  multiply,
  asterisk,
  operator,
  operators
} from './types';

export const initialState: CalcState = {
  formula: '',
  display: '0',
  evaluated: false
};

export default (state = initialState, action: CalcActionTypes) => {
  switch (action.type) {
    case ON_CLICK: {
      const { formula, display } = state;
      const { keyVal, keyType } = action.payload;
      const endString = display.charAt(display.length - 1);
      let formulaKeyVal = keyVal;
      if (formulaKeyVal === multiply) {
        formulaKeyVal = asterisk;
      }
      let formulaVal = `${formula} ${formulaKeyVal}`,
        displayVal = `${formula} ${keyVal}`;
      if (!formula.length && keyType === operator) {
        return state;
      }
      if (endString === keyVal && keyType === operator) {
        return state;
      }
      if (
        Object.values(operators).includes(endString) &&
        endString !== keyVal &&
        keyType === operator
      ) {
        formulaVal = formulaVal.slice(0, -3) + formulaKeyVal;
        displayVal = displayVal.slice(0, -3) + keyVal;
      }
      return {
        ...state,
        formula: formulaVal,
        display: displayVal
      };
    }
    default:
      return state;
  }
};
