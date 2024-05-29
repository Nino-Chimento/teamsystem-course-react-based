

import Home from "./Home"
import Template from './Template'
import { Route, Routes } from 'react-router-dom';
import TodoDetail from "./TodoDetail";

function App() {


  return (
    <Template>
      <Routes>
        <Route path="/" element={<Home title="title" />} />
        <Route path="/todo" element={<div>todo</div>} />
        <Route path="/todo/:id" element={<TodoDetail>about</TodoDetail>} />
      </Routes>

      <></>


    </Template>
  )
}

export default App
