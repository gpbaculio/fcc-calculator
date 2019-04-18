import React from 'react';
import { connect } from 'react-redux';
import { onClick, onClickArgs } from '../store/calculator/actions';

interface DecimalProps {
  keyId: string;
  onClick: ({ keyType, keyVal }: onClickArgs) => void;
}

const Decimal = ({ onClick, keyId }: DecimalProps) => {
  return (
    <div
      id={keyId}
      onClick={() => onClick({ keyType: 'decimal', keyVal: '.' })}
      className='key flex-grow-1 decimal'>
      .
    </div>
  );
};

const mapDispatchToProps = {
  onClick
};

export default connect(
  null,
  mapDispatchToProps
)(Decimal);
