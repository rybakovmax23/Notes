import React from 'react';
import './App.scss';
import { Header } from './Components/Header';
import { NoteList } from './Components/NoteList';

function App() {
  return (
    <>
      <Header />
      <NoteList />
    </>
  );
}

export default App;
