import React from 'react';
import { connect } from 'react-redux';
import { onClick, onClickArgs } from '../store/calculator/actions';

interface ZeroProps {
  keyId: string;
  onClick: ({ keyType, keyVal }: onClickArgs) => void;
}

const Zero = ({ onClick, keyId }: ZeroProps) => {
  return (
    <div
      id={keyId}
      onClick={() => onClick({ keyType: 'zero', keyVal: '0' })}
      className='flex-grow-1 p-0 d-flex justify-content-center align-items-center key number'>
      0
    </div>
  );
};

const mapDispatchToProps = {
  onClick
};

export default connect(
  null,
  mapDispatchToProps
)(Zero);
