import React from 'react';

interface OperatorProps {
  operator: string;
}
const Operator = ({ operator }: OperatorProps) => {
  return <div className='key operator '>{operator}</div>;
};

export default Operator;
