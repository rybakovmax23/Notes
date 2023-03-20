import React from 'react';
import { Note } from '../Note';
import { NoteCreator } from '../NoteCreator';
import './style.scss';

export const NoteList: React.FC = () => {
  return (
    <>
      <form className='form-wrapper'>
        <div className='hash'>#</div>
        <input type='text' className='input-search' placeholder='Search tag' />
      </form>
      <div className='note-list-wrapper'>
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <NoteCreator />
      </div>
    </>
  );
};
