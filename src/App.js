import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {Admin, Main} from "./pages"
import Term from './pages/Term';
import Term_2 from './pages/Term_2';
import Explore from './pages/Explore';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route path="/explore" element={<Explore />} />
        <Route path="/term" element={<Term />} />
        <Route path="/term2" element={<Term_2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
