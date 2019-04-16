import React from 'react';
import { onClear } from '../store/calculator/actions';
import { connect } from 'react-redux';
interface ClearProps {
  onClear: () => void;
}
const Clear = ({ onClear }: ClearProps) => {
  return (
    <div
      onClick={() => onClear()}
      className='flex-grow-1 clear d-flex justify-content-center align-items-center'>
      A/C
    </div>
  );
};

const mapDispatchToProps = {
  onClear
};

export default connect(
  null,
  mapDispatchToProps
)(Clear);
