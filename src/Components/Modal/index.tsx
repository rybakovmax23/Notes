import React, { useEffect, useMemo, useRef, useState } from 'react';
import { applyHighlights } from '../../utils/textOperations';
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
  const [textareaValue, setTextarea] = useState('');
  const refTextarea = useRef<HTMLTextAreaElement>(null);
  const refDiv = useRef<HTMLDivElement>(null);

  const valueWithHighlight = useMemo(
    () => applyHighlights(textareaValue),
    [textareaValue]
  );

  useEffect(() => {
    if (note) {
      setTextarea(note.description);
    }
  }, [note]);

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
          <div className='container-textarea'>
            <div
              className='highlight'
              dangerouslySetInnerHTML={{ __html: valueWithHighlight }}
              ref={refDiv}
            ></div>
            <textarea
              ref={refTextarea}
              onScroll={() => {
                refDiv.current!.scrollTop = refTextarea.current
                  ?.scrollTop as number;
              }}
              cols={30}
              rows={10}
              placeholder='Description'
              name='description'
              onChange={(e) => setTextarea(e.target.value)}
              defaultValue={note ? note.description : ''}
            ></textarea>
          </div>
          <div className='buttons-wrapper'>
            <button type='submit'> {note ? 'Edit' : 'Create'}</button>
            <button type='button' onClick={handlerCloseModal}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
