import React from 'react';
import { onClick, onClickArgs } from '../store/calculator/actions';
import { connect } from 'react-redux';

interface OperatorProps {
  operator: string;
  onClick: ({ keyType, keyVal }: onClickArgs) => void;
}
const Operator = ({ operator, onClick }: OperatorProps) => {
  return (
    <div
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
