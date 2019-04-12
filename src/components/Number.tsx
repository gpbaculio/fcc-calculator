import React from 'react';

interface NumberProps {
  num: number;
}
const Number = ({ num }: NumberProps) => {
  return <div className='key flex-grow-1 number'>{num}</div>;
};

export default Number;
