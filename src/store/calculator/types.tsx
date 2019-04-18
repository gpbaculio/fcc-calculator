export const ON_NUM_CLICK = 'ON_NUM_CLICK';
export const ON_OPERATOR_CLICK = 'ON_OPERATOR_CLICK';
export const ON_EQUAL_CLICK = 'ON_EQUAL_CLICK';
export const ON_CLEAR_CLICK = 'ON_CLEAR_CLICK';
export const ON_ZERO_CLICK = 'ON_ZERO_CLICK';
export const ON_DECIMAL_CLICK = 'ON_DECIMAL_CLICK';
export const add = '+';
export const subtract = '-';
export const divide = '/';
export const multiply = 'x';
export const asterisk = '*';
export const operator = 'operator';
export const decimal = '.';
export const CLEAR = 'CLEAR';
export const operators = {
  add,
  subtract,
  divide,
  multiply
};

export interface CalcState {
  formula: string;
  display: string;
  evaluated: boolean;
}

interface onClick {
  type:
    | typeof ON_NUM_CLICK
    | typeof ON_OPERATOR_CLICK
    | typeof ON_EQUAL_CLICK
    | typeof ON_ZERO_CLICK
    | typeof ON_DECIMAL_CLICK;
  payload: {
    keyVal: string;
    keyType: string;
  };
}

interface onClear {
  type: typeof ON_CLEAR_CLICK;
}

export type CalcActionTypes = onClick | onClear;
