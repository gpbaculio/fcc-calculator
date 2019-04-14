import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';

interface FormulaProps {
  formula: string;
}

const Formula = ({ formula }: FormulaProps) => {
  return (
    <div id='formula' className='text-right'>
      {formula}
    </div>
  );
};

const mapStateToProps = ({ calculator: { formula } }: AppState) => ({
  formula
});

export default connect(mapStateToProps)(Formula);
