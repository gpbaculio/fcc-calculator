import React from 'react';
import { connect } from 'react-redux';
import { onClick, onClickArgs } from '../store/calculator/actions';

interface EqualProps {
  onClick: ({ keyType, keyVal }: onClickArgs) => void;
}

const Equal = ({ onClick }: EqualProps) => {
  return (
    <div
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
