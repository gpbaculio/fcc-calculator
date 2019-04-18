import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';

interface ResultProps {
  keyId: string;
  display: string;
}

const Result = ({ display, keyId }: ResultProps) => {
  return (
    <div id={keyId} className='text-right'>
      {display}
    </div>
  );
};

const mapStateToProps = ({ calculator: { display } }: AppState) => ({
  display
});

export default connect(mapStateToProps)(Result);
