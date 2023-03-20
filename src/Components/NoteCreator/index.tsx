import React from 'react';
import './style.scss';

interface NoteCreatorProps {
  handlerOpenModal: () => void;
}

export const NoteCreator: React.FC<NoteCreatorProps> = ({handlerOpenModal}) => {
  return (
    <div className='note-creator-wrapper' onClick={handlerOpenModal}>
      <div className='plus'>+</div>
    </div>
  );
};
