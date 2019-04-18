import React from 'react';
import { connect } from 'react-redux';
import { onClick, onClickArgs } from '../store/calculator/actions';

interface NumberProps {
  num: number;
  keyId: string;
  onClick: ({ keyType, keyVal }: onClickArgs) => void;
}

const Number = ({ num, onClick, keyId }: NumberProps) => {
  return (
    <div
      id={keyId}
      onClick={() => onClick({ keyType: 'number', keyVal: num.toString() })}
      className='key flex-grow-1 number'>
      {num}
    </div>
  );
};

const mapDispatchToProps = {
  onClick
};

export default connect(
  null,
  mapDispatchToProps
)(Number);
