import './App.css';
import Landing from './components/landing';
import { Routes, Route } from "react-router-dom"
import Translate from './components/translate/translate';

export default function App() {
  return (
    <Routes>
        <Route path="/" element={ <Landing /> } />
        <Route path="translate" element={ <Translate /> } />
      </Routes>
  )
}
