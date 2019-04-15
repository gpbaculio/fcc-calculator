import React from 'react';
import { connect } from 'react-redux';
import { onClick, onClickArgs } from '../store/calculator/actions';

interface NumberProps {
  num: number;
  onClick: ({ keyType, keyVal }: onClickArgs) => void;
}

const Number = ({ num, onClick }: NumberProps) => {
  return (
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        onClick({ keyType: 'number', keyVal: num.toString() })
      }
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
