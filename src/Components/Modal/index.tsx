import React from 'react';
import { NotesInterface } from '../NoteList';
import './style.scss';

interface ModalProps {
  handlerCloseModal: () => void;
  handlerSubmit: (e: React.SyntheticEvent) => void;
  note: NotesInterface | null;
}

export const Modal: React.FC<ModalProps> = ({
  handlerCloseModal,
  handlerSubmit,
  note,
}) => {
  return (
    <div className='modal-container' onClick={handlerCloseModal}>
      <div className='modal-wrapper' onClick={(e) => e.stopPropagation()}>
        <form className='form-modal' onSubmit={handlerSubmit}>
          <input
            type='text'
            placeholder='Name'
            name='name'
            maxLength={20}
            defaultValue={note ? note.name : ''}
          />
          <textarea
            cols={30}
            rows={10}
            maxLength={525}
            placeholder='Description'
            name='description'
            defaultValue={note ? note.description : ''}
          ></textarea>
          <div className='buttons-wrapper'>
            <button type='submit'>Create</button>
            <button type='button' onClick={handlerCloseModal}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
