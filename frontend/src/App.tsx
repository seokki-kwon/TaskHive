import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import CreateTask from './pages/CreateTask';
import TaskList from './pages/TaskList';
import TaskDetail from './pages/TaskDetail';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/tasks' element={<TaskList/>}/>
      <Route path='/tasks/new' element={<CreateTask/>}/>
      <Route path='/tasks/detail' element={<TaskDetail/>}/>
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
