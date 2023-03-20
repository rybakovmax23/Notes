import React from 'react';
import { Note } from '../Note';
import './style.scss';

export const NoteList: React.FC = () => {
  return (
    <div>
      <form className='form-wrapper'>
        <div className='hash'>#</div>
        <input type='text' className='input-search' placeholder='Search tag' />
      </form>
      <Note />
    </div>
  );
};
