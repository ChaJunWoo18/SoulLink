import './App.css';
import { BrowswerRoueter, Routes, Route } from 'react-router-dom';
import Login from './page/login';
import Main from './page/main';
import Join_normal from './page/join_normal';
import Join_counsel from './page/join_counsel';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="join_normal" element={<Join_normal />} />
        <Route path="join_counsel" element={<Join_counsel />} />
      </Routes>
    </div>
  );
}

export default App;
