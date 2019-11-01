import math from 'mathjs';
import { subtract } from './types';
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
const isOperator = /[x/+‑]/,
  endsWithOperator = /[x+‑/]$/,
  endsWithNegativeSign = /[x/+]‑$/,
  clearStyle = { background: '#ac3939' },
  operatorStyle = { background: '#666666' },
  equalsStyle = {
    background: '#004466',
    position: 'absolute',
    height: 130,
    bottom: 5
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
        } // temp.match(/[+\-*/]/g)
        if (endString === multiply && keyVal === subtract) {
          console.log('formulaVal ', formulaVal);
          return {
            ...state,
            formula: formulaVal,
            display: keyVal
          };
        }
        if (
          Object.values(operators).includes(endString) &&
          endString !== keyVal
        ) {
          formulaVal = formulaVal.slice(0, -2) + formulaKeyVal;
        }
        const operatorReg = /(\+|-|\*|\/){2,}/; //checks for consecutive operators in the string
        let tempOps = formulaVal.match(operatorReg); //this contains the group or groups of consecutive operators
        if (tempOps != null) {
          let opBlock = tempOps[0].toString(); //converts the block into string
          formulaVal = formulaVal.replace(opBlock, tempOps[tempOps.length - 1]); //replaces the block of consecutive operators with the latest one
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
      let expression = formula;
      while (endsWithOperator.test(formula)) {
        expression = expression.slice(0, -1);
      }
      expression = expression.replace(/x/g, '*').replace(/‑/g, '-');
      let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;

      return {
        ...state,
        evaluated: true,
        formula:
          expression.replace(/\*/g, '⋅').replace(/-/g, '‑') + '=' + answer,
        display: answer.toString()
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
