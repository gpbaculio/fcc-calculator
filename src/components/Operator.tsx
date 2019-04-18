import React from 'react';
import { onClick, onClickArgs } from '../store/calculator/actions';
import { connect } from 'react-redux';

interface OperatorProps {
  keyId: string;
  operator: string;
  onClick: ({ keyType, keyVal }: onClickArgs) => void;
}
const Operator = ({ operator, onClick, keyId }: OperatorProps) => {
  return (
    <div
      id={keyId}
      onClick={() => onClick({ keyType: 'operator', keyVal: operator })}
      className='key operator '>
      {operator}
    </div>
  );
};

const mapDispatchToProps = {
  onClick
};

export default connect(
  null,
  mapDispatchToProps
)(Operator);
