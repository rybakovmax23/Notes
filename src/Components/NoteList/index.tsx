import React, { useState } from 'react';
import { Modal } from '../Modal';
import { Note } from '../Note';
import { NoteCreator } from '../NoteCreator';
import './style.scss';
import { v4 as uuid } from 'uuid';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';
import { getTagsFromText } from '../../utils/textOperations';

export interface NotesInterface {
  id: string;
  name: string;
  description: string;
}

export const NoteList: React.FC = () => {
  const [isModalOpen, setOpenModal] = useState(false);
  const [notes, setNotes] = useState<NotesInterface[]>(
    getLocalStorage('notes') || []
  );
  const [inputValue, setInputValue] = useState('');
  const [editNote, setEditNote] = useState<NotesInterface | null>(null);

  const handlerOpenModal = () => {
    setOpenModal(true);
  };

  const handlerCloseModal = () => {
    setOpenModal(false);
    if (editNote) {
      setEditNote(null);
    }
  };
  const handlerOpenEditModal = (id: string) => () => {
    handlerOpenModal();
    setEditNote(notes.filter((note) => note.id === id)[0]);
  };

  const handlerCreateNote = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      description: { value: string };
    };
    const newNotes = {
      id: uuid(),
      name: target.name.value,
      description: target.description.value,
    };
    setNotes((prev) => [...prev, newNotes]);
    setLocalStorage('notes', [...notes, newNotes]);
    handlerCloseModal();
  };

  const handlerEditNote = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      description: { value: string };
    };
    const newNotes = notes.map((note) => {
      if (note.id === editNote!.id) {
        return {
          id: note.id,
          name: target.name.value,
          description: target.description.value,
        };
      }
      return note;
    });
    setNotes(newNotes);
    setLocalStorage('notes', newNotes);
    handlerCloseModal();
  };

  const handlerDeleteNote = (id: string) => () => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    setLocalStorage('notes', newNotes);
  };

  const foundedNotes = notes.filter((note) => {
    if (inputValue) {
      const searchNote = '#' + inputValue;
      return note.description.includes(searchNote);
    }
    return note;
  });

  return (
    <>
      <div className='form-wrapper'>
        <div className='hash'>#</div>
        <input
          type='text'
          className='input-search'
          placeholder='Search tag'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className='note-list-wrapper'>
        {foundedNotes.map((note) => {
          return (
            <Note
              key={note.id}
              id={note.id}
              name={note.name}
              description={note.description}
              tags={getTagsFromText(note.description)}
              handlerDeleteNote={handlerDeleteNote}
              handlerEditNote={handlerOpenEditModal}
            />
          );
        })}
        <NoteCreator handlerOpenModal={handlerOpenModal} />
      </div>
      {isModalOpen && (
        <Modal
          handlerCloseModal={handlerCloseModal}
          handlerSubmit={editNote ? handlerEditNote : handlerCreateNote}
          note={editNote}
        />
      )}
    </>
  );
};
