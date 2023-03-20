import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import './style.scss';

export const Note: React.FC = () => {
  return (
    <div className='note-wrapper'>
      <div className='note-header'>
        <h3 className='note-title'>Title</h3>
        <div className='buttons-wrapper'>
          <div className='edit'>
            <AiFillEdit />
          </div>
          <div className='delete'>
            <AiFillDelete />
          </div>
        </div>
      </div>
      <div className='note-main'>
        <div className='note-description'>Description</div>
        <div className='note-tags'>
          <span>#tag1</span>
          <span>#tag2</span>
        </div>
      </div>
    </div>
  );
};
