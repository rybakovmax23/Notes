import React, { MouseEventHandler } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import './style.scss';
import { v4 as uuid } from 'uuid';

interface NoteProps {
  id: string;
  name: string;
  description: string;
  tags: string[];
  handlerDeleteNote: (id: string) => MouseEventHandler;
  handlerEditNote: (id: string) => MouseEventHandler;
}

export const Note: React.FC<NoteProps> = ({
  id,
  name,
  description,
  tags,
  handlerDeleteNote,
  handlerEditNote,
}) => {
  return (
    <div className='note-wrapper'>
      <div className='note-header'>
        <h3 className='note-title'>{name}</h3>
        <div className='buttons-wrapper'>
          <div className='edit' onClick={handlerEditNote(id)}>
            <AiFillEdit />
          </div>
          <div className='delete' onClick={handlerDeleteNote(id)}>
            <AiFillDelete />
          </div>
        </div>
      </div>
      <div className='note-main'>
        <div className='note-description'>{description}</div>
        <div className='note-tags'>
          {tags.map((tag) => {
            return <div key={uuid()}>{tag}</div>;
          })}
        </div>
      </div>
    </div>
  );
};
