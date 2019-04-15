export const ON_CLICK = 'ON_CLICK';
export const add = '+';
export const subtract = '-';
export const divide = '/';
export const multiply = 'x';
export const asterisk = '*';
export const operator = 'operator';

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
  type: typeof ON_CLICK;
  payload: {
    keyVal: string;
    keyType: string;
  };
}

export type CalcActionTypes = onClick;
