import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';

interface ResultProps {
  display: string;
}

const Result = ({ display }: ResultProps) => {
  return (
    <div id='display' className='text-right'>
      {display}
    </div>
  );
};

const mapStateToProps = ({ calculator: { display } }: AppState) => ({
  display
});

export default connect(mapStateToProps)(Result);
