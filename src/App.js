

import './App.css';
import Input from './components/Input';
import Board from './components/Board';
import { useState } from 'react';

function App() {
  const [task, setTask] = useState([]);
  return (
    <>
      <Input task={task} setTask={setTask} />
      <Board task={task} />
    </>
  );
}

export default App;
