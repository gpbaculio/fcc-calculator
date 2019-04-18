import React from 'react';
import { connect } from 'react-redux';
import { onClick, onClickArgs } from '../store/calculator/actions';

interface EqualProps {
  keyId: string;
  onClick: ({ keyType, keyVal }: onClickArgs) => void;
}

const Equal = ({ onClick, keyId }: EqualProps) => {
  return (
    <div
      id={keyId}
      onClick={() => onClick({ keyType: 'equal', keyVal: null })}
      className='key equal flex-grow-1 d-flex justify-content-center align-items-center'>
      =
    </div>
  );
};

const mapDispatchToProps = {
  onClick
};

export default connect(
  null,
  mapDispatchToProps
)(Equal);
