import React from 'react';
import { Header } from './Components/Header';
import { NoteList } from './Components/NoteList';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <NoteList />
    </>
  );
};

export default App;
