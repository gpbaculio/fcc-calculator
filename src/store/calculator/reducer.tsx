import math from 'mathjs';
import {
  CalcState,
  CalcActionTypes,
  ON_OPERATOR_CLICK,
  multiply,
  asterisk,
  operator,
  operators,
  ON_NUM_CLICK,
  ON_EQUAL_CLICK,
  ON_CLEAR_CLICK,
  ON_ZERO_CLICK,
  ON_DECIMAL_CLICK,
  decimal
} from './types';

export const initialState: CalcState = {
  formula: '',
  display: '0',
  evaluated: false
};

export default (state = initialState, action: CalcActionTypes) => {
  switch (action.type) {
    case ON_NUM_CLICK: {
      const { formula, evaluated, display } = state,
        { keyVal } = action.payload,
        displayVal = `${display}${keyVal}`;
      if (!evaluated) {
        return {
          ...state,
          formula: `${formula}${keyVal === multiply ? asterisk : keyVal}`,
          display:
            displayVal.charAt(0) === '0' ? displayVal.substr(1) : displayVal
        };
      }
      if (evaluated) {
        return { formula: keyVal, display: keyVal, evaluated: false };
      }
    }
    case ON_OPERATOR_CLICK: {
      const { formula, display, evaluated } = state,
        { keyVal } = action.payload,
        endString = display.charAt(display.length - 1),
        formulaKeyVal = keyVal === multiply ? asterisk : keyVal;
      let formulaVal = `${formula}${formulaKeyVal}`;
      if (!evaluated) {
        if (!formula.length) {
          return state;
        }
        if (endString === keyVal) {
          return state;
        }
        if (
          Object.values(operators).includes(endString) &&
          endString !== keyVal
        ) {
          formulaVal = formulaVal.slice(0, -2) + formulaKeyVal;
        }
        return {
          ...state,
          formula: formulaVal,
          display: keyVal
        };
      } else {
        return {
          ...state,
          evaluated: false,
          formula: `${display}${formulaKeyVal}`,
          display: keyVal
        };
      }
    }
    case ON_EQUAL_CLICK: {
      const { formula, evaluated } = state;
      if (evaluated) {
        return state;
      }
      const result = math.eval(formula);
      return {
        ...state,
        evaluated: true,
        formula: `${formula} = ${result}`,
        display: result.toString()
      };
    }
    case ON_ZERO_CLICK: {
      const { formula, evaluated, display } = state,
        { keyVal } = action.payload,
        endString = display.charAt(display.length - 1);
      if (!formula.length) {
        return state;
      }
      if (evaluated) {
        return initialState;
      }
      return {
        ...state,
        formula: `${formula}${keyVal === multiply ? asterisk : keyVal}`,
        display: endString === '.' ? `${display}${keyVal}` : keyVal
      };
    }
    case ON_DECIMAL_CLICK: {
      const { formula, display } = state,
        { keyVal } = action.payload,
        endString = display.charAt(display.length - 1);
      if (display.includes(decimal)) {
        return state;
      }
      return {
        ...state,
        formula: `${formula}${keyVal === multiply ? asterisk : keyVal}`,
        display: `${endString}${keyVal}`
      };
    }
    case ON_CLEAR_CLICK: {
      return { ...initialState };
    }
    default:
      return state;
  }
};
