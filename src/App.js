import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Tasks from './Pages/Tasks';
import CompletedTask from './CompletedTask';
import PendingTask from './Pages/PendingTask';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App body">
      <Navbar></Navbar>
      <Routes>
        <Route path='/all-task' element={<Tasks></Tasks>}></Route>
        <Route path='/completed-task' element={<CompletedTask></CompletedTask>}></Route>
        <Route path='/pending-task' element={<PendingTask></PendingTask>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
